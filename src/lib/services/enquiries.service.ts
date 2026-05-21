/**
 * Service for managing contact enquiries and demo requests
 * Use these functions in your admin dashboard or API routes
 */

import { createClient } from '@/supabase/server';
import type { ContactEnquiry, DemoRequest } from '@/lib/types/database.types';

/**
 * Get all contact enquiries with optional filtering
 */
export async function getContactEnquiries(options?: {
  status?: ContactEnquiry['status'];
  limit?: number;
  offset?: number;
}) {
  const supabase = await createClient();
  
  let query = supabase
    .from('contact_enquiries')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false });

  if (options?.status) {
    query = query.eq('status', options.status);
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error('Error fetching contact enquiries:', error);
    return { data: null, error, count: 0 };
  }

  return { data, error: null, count };
}

/**
 * Get a single contact enquiry by ID
 */
export async function getContactEnquiryById(id: string) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('contact_enquiries')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching contact enquiry:', error);
    return { data: null, error };
  }

  return { data, error: null };
}

/**
 * Update contact enquiry status
 */
export async function updateContactEnquiryStatus(
  id: string,
  status: ContactEnquiry['status']
) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('contact_enquiries')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating contact enquiry status:', error);
    return { data: null, error };
  }

  return { data, error: null };
}

/**
 * Get all demo requests with optional filtering
 */
export async function getDemoRequests(options?: {
  status?: DemoRequest['status'];
  limit?: number;
  offset?: number;
}) {
  const supabase = await createClient();
  
  let query = supabase
    .from('demo_requests')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false });

  if (options?.status) {
    query = query.eq('status', options.status);
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error('Error fetching demo requests:', error);
    return { data: null, error, count: 0 };
  }

  return { data, error: null, count };
}

/**
 * Get a single demo request by ID
 */
export async function getDemoRequestById(id: string) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('demo_requests')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching demo request:', error);
    return { data: null, error };
  }

  return { data, error: null };
}

/**
 * Update demo request status
 */
export async function updateDemoRequestStatus(
  id: string,
  status: DemoRequest['status']
) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('demo_requests')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating demo request status:', error);
    return { data: null, error };
  }

  return { data, error: null };
}

/**
 * Search contact enquiries by email or name
 */
export async function searchContactEnquiries(searchTerm: string) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('contact_enquiries')
    .select('*')
    .or(`email.ilike.%${searchTerm}%,name.ilike.%${searchTerm}%`)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error searching contact enquiries:', error);
    return { data: null, error };
  }

  return { data, error: null };
}

/**
 * Search demo requests by email, name, or company
 */
export async function searchDemoRequests(searchTerm: string) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('demo_requests')
    .select('*')
    .or(`email.ilike.%${searchTerm}%,name.ilike.%${searchTerm}%,company.ilike.%${searchTerm}%`)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error searching demo requests:', error);
    return { data: null, error };
  }

  return { data, error: null };
}

/**
 * Get enquiries with low reCAPTCHA scores (potential spam)
 */
export async function getPotentialSpam(threshold: number = 0.5) {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('contact_enquiries')
    .select('*')
    .lt('recaptcha_score', threshold)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching potential spam:', error);
    return { data: null, error };
  }

  return { data, error: null };
}

/**
 * Get statistics for contact enquiries
 */
export async function getContactEnquiryStats() {
  const supabase = await createClient();
  
  const { count: totalCount } = await supabase
    .from('contact_enquiries')
    .select('*', { count: 'exact', head: true });

  const { count: newCount } = await supabase
    .from('contact_enquiries')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'new');

  const { count: inProgressCount } = await supabase
    .from('contact_enquiries')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'in_progress');

  const { count: resolvedCount } = await supabase
    .from('contact_enquiries')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'resolved');

  return {
    total: totalCount || 0,
    new: newCount || 0,
    inProgress: inProgressCount || 0,
    resolved: resolvedCount || 0,
  };
}

/**
 * Get statistics for demo requests
 */
export async function getDemoRequestStats() {
  const supabase = await createClient();
  
  const { count: totalCount } = await supabase
    .from('demo_requests')
    .select('*', { count: 'exact', head: true });

  const { count: newCount } = await supabase
    .from('demo_requests')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'new');

  const { count: scheduledCount } = await supabase
    .from('demo_requests')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'scheduled');

  const { count: completedCount } = await supabase
    .from('demo_requests')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'completed');

  return {
    total: totalCount || 0,
    new: newCount || 0,
    scheduled: scheduledCount || 0,
    completed: completedCount || 0,
  };
}
