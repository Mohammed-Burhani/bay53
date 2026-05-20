import { createClient } from "@/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  const next = requestUrl.searchParams.get("next") || "/dashboard";

  if (code) {
    const supabase = await createClient(); 
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.session) {
      const user = data.user;
      
      // Check if user exists in our database
      const { data: existingUser } = await supabase
        .from('users')
        .select('id, company_id, onboarding_progress(*)')
        .eq('auth_id', user.id)
        .single();

      if (existingUser) {
        // Existing user - check if onboarding is complete
        if (existingUser.company_id && existingUser.onboarding_progress?.is_completed) {
          // Fully onboarded - go to dashboard
          return NextResponse.redirect(`${origin}/dashboard`);
        } else {
          // Incomplete onboarding - go to complete profile
          return NextResponse.redirect(`${origin}/complete-profile`);
        }
      } else {
        // New user - create user record and redirect to complete profile
        try {
          const { data: newUser, error: insertError } = await supabase
            .from('users')
            .insert({
              auth_id: user.id,
              email: user.email!,
              username: user.email!.split('@')[0],
              full_name: user.user_metadata?.full_name || user.user_metadata?.name,
              avatar_url: user.user_metadata?.avatar_url || user.user_metadata?.picture,
              auth_provider: 'google',
              email_verified: true,
            })
            .select()
            .single();

          if (!insertError && newUser) {
            // Create onboarding progress record
            await supabase
              .from('onboarding_progress')
              .insert({
                user_id: newUser.id,
                step_3_admin_account: true, // Google auth completes step 3
              });

            // Redirect to complete profile
            return NextResponse.redirect(`${origin}/complete-profile`);
          }
        } catch (err) {
          console.error("Failed to create user:", err);
        }
      }
    }

    if (error) {
      console.error("Auth error:", error);
    }
  }

  // Error case - redirect to login with error
  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
