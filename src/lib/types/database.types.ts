/**
 * Database types for Supabase tables
 * Generated based on the database schema
 */

export interface ContactEnquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  recaptcha_score: number | null;
  status: 'new' | 'in_progress' | 'resolved' | 'spam';
  created_at: string;
  updated_at: string;
}

export interface DemoRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string | null;
  message: string | null;
  recaptcha_score: number | null;
  status: 'new' | 'scheduled' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export type ContactEnquiryInsert = Omit<ContactEnquiry, 'id' | 'created_at' | 'updated_at'>;
export type DemoRequestInsert = Omit<DemoRequest, 'id' | 'created_at' | 'updated_at'>;

export type ContactEnquiryUpdate = Partial<Omit<ContactEnquiry, 'id' | 'created_at' | 'updated_at'>>;
export type DemoRequestUpdate = Partial<Omit<DemoRequest, 'id' | 'created_at' | 'updated_at'>>;

// Database schema type
export interface Database {
  public: {
    Tables: {
      contact_enquiries: {
        Row: ContactEnquiry;
        Insert: ContactEnquiryInsert;
        Update: ContactEnquiryUpdate;
      };
      demo_requests: {
        Row: DemoRequest;
        Insert: DemoRequestInsert;
        Update: DemoRequestUpdate;
      };
    };
  };
}
