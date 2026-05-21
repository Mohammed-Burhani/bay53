import { createClient } from "@supabase/supabase-js";

/**
 * Admin client for server-side operations that bypass RLS
 * Use this for operations that need elevated privileges
 * NEVER expose this client to the browser
 */
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL environment variable");
  }

  if (!supabaseServiceKey) {
    // If service role key is not available, fall back to anon key
    // This will still work if RLS policies are properly configured
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
    if (!anonKey) {
      throw new Error("Missing both SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY");
    }
    console.warn("Using anon key for admin operations. Consider adding SUPABASE_SERVICE_ROLE_KEY for better security.");
    return createClient(supabaseUrl, anonKey);
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
