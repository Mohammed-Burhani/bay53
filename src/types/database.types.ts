/**
 * Database Types - Auto-generated from Supabase Schema
 * Matches the structure defined in supabase/migrations/001_user_onboarding_schema.sql
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          company_name: string
          email: string
          phone: string
          contact_person: string
          address: string
          country: string
          state: string | null
          pin_code: string | null
          gst_number: string | null
          nature_of_business: NatureOfBusiness | null
          currency: string
          logo_url: string | null
          subscription_plan: string
          subscription_status: SubscriptionStatus
          trial_ends_at: string | null
          onboarding_completed: boolean
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          company_name: string
          email: string
          phone: string
          contact_person: string
          address: string
          country?: string
          state?: string | null
          pin_code?: string | null
          gst_number?: string | null
          nature_of_business?: NatureOfBusiness | null
          currency?: string
          logo_url?: string | null
          subscription_plan?: string
          subscription_status?: SubscriptionStatus
          trial_ends_at?: string | null
          onboarding_completed?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          company_name?: string
          email?: string
          phone?: string
          contact_person?: string
          address?: string
          country?: string
          state?: string | null
          pin_code?: string | null
          gst_number?: string | null
          nature_of_business?: NatureOfBusiness | null
          currency?: string
          logo_url?: string | null
          subscription_plan?: string
          subscription_status?: SubscriptionStatus
          trial_ends_at?: string | null
          onboarding_completed?: boolean
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          auth_id: string | null
          company_id: string | null
          username: string
          email: string
          full_name: string | null
          phone: string | null
          role: UserRole
          is_company_admin: boolean
          avatar_url: string | null
          auth_provider: AuthProvider
          email_verified: boolean
          last_login_at: string | null
          is_active: boolean
          is_deleted: boolean
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          auth_id?: string | null
          company_id?: string | null
          username: string
          email: string
          full_name?: string | null
          phone?: string | null
          role?: UserRole
          is_company_admin?: boolean
          avatar_url?: string | null
          auth_provider?: AuthProvider
          email_verified?: boolean
          last_login_at?: string | null
          is_active?: boolean
          is_deleted?: boolean
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          auth_id?: string | null
          company_id?: string | null
          username?: string
          email?: string
          full_name?: string | null
          phone?: string | null
          role?: UserRole
          is_company_admin?: boolean
          avatar_url?: string | null
          auth_provider?: AuthProvider
          email_verified?: boolean
          last_login_at?: string | null
          is_active?: boolean
          is_deleted?: boolean
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      onboarding_progress: {
        Row: {
          id: string
          user_id: string | null
          company_id: string | null
          step_1_company_info: boolean
          step_2_business_details: boolean
          step_3_admin_account: boolean
          is_completed: boolean
          completed_at: string | null
          form_data: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          company_id?: string | null
          step_1_company_info?: boolean
          step_2_business_details?: boolean
          step_3_admin_account?: boolean
          is_completed?: boolean
          completed_at?: string | null
          form_data?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          company_id?: string | null
          step_1_company_info?: boolean
          step_2_business_details?: boolean
          step_3_admin_account?: boolean
          is_completed?: boolean
          completed_at?: string | null
          form_data?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      user_sessions: {
        Row: {
          id: string
          user_id: string | null
          session_token: string | null
          ip_address: string | null
          user_agent: string | null
          device_type: string | null
          browser: string | null
          os: string | null
          country: string | null
          city: string | null
          login_at: string
          logout_at: string | null
          expires_at: string | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          session_token?: string | null
          ip_address?: string | null
          user_agent?: string | null
          device_type?: string | null
          browser?: string | null
          os?: string | null
          country?: string | null
          city?: string | null
          login_at?: string
          logout_at?: string | null
          expires_at?: string | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          session_token?: string | null
          ip_address?: string | null
          user_agent?: string | null
          device_type?: string | null
          browser?: string | null
          os?: string | null
          country?: string | null
          city?: string | null
          login_at?: string
          logout_at?: string | null
          expires_at?: string | null
          is_active?: boolean
          created_at?: string
        }
      }
      audit_logs: {
        Row: {
          id: string
          user_id: string | null
          company_id: string | null
          action: string
          entity_type: string | null
          entity_id: string | null
          description: string | null
          old_values: Json | null
          new_values: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          company_id?: string | null
          action: string
          entity_type?: string | null
          entity_id?: string | null
          description?: string | null
          old_values?: Json | null
          new_values?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          company_id?: string | null
          action?: string
          entity_type?: string | null
          entity_id?: string | null
          description?: string | null
          old_values?: Json | null
          new_values?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_company_with_admin: {
        Args: {
          p_company_name: string
          p_email: string
          p_phone: string
          p_contact_person: string
          p_address: string
          p_country: string
          p_state: string
          p_pin_code: string
          p_gst_number: string
          p_nature_of_business: string
          p_currency: string
          p_admin_username: string
          p_admin_email: string
          p_auth_id: string
          p_auth_provider?: string
        }
        Returns: {
          company_id: string
          user_id: string
          success: boolean
          message: string
        }[]
      }
      complete_user_profile: {
        Args: {
          p_auth_id: string
          p_company_name: string
          p_email: string
          p_phone: string
          p_contact_person: string
          p_address: string
          p_country: string
          p_state: string
          p_pin_code: string
          p_gst_number: string
          p_nature_of_business: string
          p_currency: string
        }
        Returns: {
          company_id: string
          success: boolean
          message: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Enum Types
export type NatureOfBusiness = 
  | 'Retail' 
  | 'Wholesale' 
  | 'Distribution' 
  | 'Trading' 
  | 'Manufacturing' 
  | 'Fabrication'

export type SubscriptionStatus = 
  | 'active' 
  | 'inactive' 
  | 'suspended' 
  | 'cancelled'

export type UserRole = 
  | 'super_admin' 
  | 'admin' 
  | 'manager' 
  | 'user' 
  | 'viewer'

export type AuthProvider = 
  | 'email' 
  | 'google' 
  | 'microsoft' 
  | 'apple'

// Helper Types
export type Company = Database['public']['Tables']['companies']['Row']
export type CompanyInsert = Database['public']['Tables']['companies']['Insert']
export type CompanyUpdate = Database['public']['Tables']['companies']['Update']

export type User = Database['public']['Tables']['users']['Row']
export type UserInsert = Database['public']['Tables']['users']['Insert']
export type UserUpdate = Database['public']['Tables']['users']['Update']

export type OnboardingProgress = Database['public']['Tables']['onboarding_progress']['Row']
export type OnboardingProgressInsert = Database['public']['Tables']['onboarding_progress']['Insert']
export type OnboardingProgressUpdate = Database['public']['Tables']['onboarding_progress']['Update']

export type UserSession = Database['public']['Tables']['user_sessions']['Row']
export type UserSessionInsert = Database['public']['Tables']['user_sessions']['Insert']
export type UserSessionUpdate = Database['public']['Tables']['user_sessions']['Update']

export type AuditLog = Database['public']['Tables']['audit_logs']['Row']
export type AuditLogInsert = Database['public']['Tables']['audit_logs']['Insert']
export type AuditLogUpdate = Database['public']['Tables']['audit_logs']['Update']

// Function Return Types
export type CreateCompanyWithAdminResult = {
  company_id: string
  user_id: string
  success: boolean
  message: string
}

export type CompleteUserProfileResult = {
  company_id: string
  success: boolean
  message: string
}
