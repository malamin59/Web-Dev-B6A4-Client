"use client";
import { useSession } from "next-auth/react";

export function useUserRole() {
  const { data, status } = useSession();
  const user = data?.user;
  const role = data?.user?.role;
  const id = data?.user.id;

  return {
    role,
    id,
    user,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
  };
}
