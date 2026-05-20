"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/hooks/useAuth";
import CompleteProfileForm from "@/components/auth/CompleteProfileForm";

export default function CompleteProfilePage() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    // If not logged in, redirect to signup
    if (!session) {
      router.replace("/signup");
    }
  }, [session, router]);

  // Don't render form if not authenticated
  if (!session) return null;

  return <CompleteProfileForm />;
}
