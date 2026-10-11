"use client";
import { signIn } from "next-auth/react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  router: AppRouterInstance,
) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  try {
    const data = Object.fromEntries(fromData);
    // console.log("data from login Submit Page", data);
    const res = await signIn("credentials", {
      email: fromData.get("email"),
      password: fromData.get("password"),
      redirect: false,
      callbackUrl: "/dashboard",
    });
    if (res?.error) {
      toast.error("Invalid email or password");
      return;
    } else {
      toast.success("login Successfully");
      router.push("/dashboard");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong");
  }
};
