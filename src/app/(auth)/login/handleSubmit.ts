"use client";
import { signIn } from "next-auth/react";
export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  try {
    const data = Object.fromEntries(fromData);
    console.log("data from login Submit Page", data);
    const res = await signIn("credentials", {
      email: fromData.get("email"),
      password: fromData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      alert(res.error);
    } else {
      alert("Login successful");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};
