"use client";

import { useUserRole } from "@/hooks/userRole";
import HandleReview from "./HandleReview";

export default function ReviewSection({ reviewedUserId }: { reviewedUserId: string }) {
  const { id, isLoading } = useUserRole();

  if (isLoading) return <p>Loading...</p>;
  if (!id) return null;

  return (
    <HandleReview
      reviewerId={id}
      reviewedUserId={reviewedUserId}
    />
  );
}