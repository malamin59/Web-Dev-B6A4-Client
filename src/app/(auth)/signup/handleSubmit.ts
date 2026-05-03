import toast from "react-hot-toast";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { signIn } from "next-auth/react";

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  router: AppRouterInstance,
) => {
  e.preventDefault();
  const fromData = new FormData(e.currentTarget);
  const data = Object.fromEntries(fromData);
  console.log("data from handle Submit Page", data);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const result = await res.json();
    console.log(result);
    if (!res.ok) {
      toast.error(result.message || "Register failed");
      return;
    }

    // Extract credentials
    const { email, password } = data as {
      email: string;
      password: string;
    };

    // AUTO LOGIN
    const loginInRes = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (loginInRes?.error) {
      toast.error("Auto login Failed");
    }
    toast.success("resister Successfully");
    router.push("/");
  } catch (error: any) {
    console.error(error);
    alert(error.message || "something went wrong");
  }
};
