"use client";


import { Spinner } from "@/components/ui/spinner";

export default function GlobalLoading() {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  );
}
