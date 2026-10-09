"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useEffect } from "react";

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  useEffect(() => {
    if (!token) return;

    const verifyEmail = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users/verify-email?token=${token}`,
      );

      const data = await response.json();

      console.log(data);
      if (data.success) {
        router.push("/");
      }
    };

    verifyEmail();
  }, [token]);
  return <h1>Verify Email</h1>;
}
