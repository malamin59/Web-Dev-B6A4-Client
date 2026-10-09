import toast from "react-hot-toast";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
import { signIn } from "next-auth/react";

export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  router: AppRouterInstance,
  otpSent: boolean,
  setOtpSent: Dispatch<SetStateAction<boolean>>,
) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);

  try {
    // Step 1: Send OTP
    if (!otpSent) {
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

      if (!res.ok) {
        toast.error(result.message || "Registration failed");
        return;
      }

      setOtpSent(true);
      toast.success("OTP sent! Please check your email.");
      return;
    }

    // Step 2: Verify OTP and register
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users/verify-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          otp: data.otp,
        }),
      },
    );

    const result = await res.json();

    if (!res.ok) {
      toast.error(result.message || "OTP verification failed");
      return;
    }

    const { email, password } = data as {
      email: string;
      password: string;
    };

    const loginResult = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (loginResult?.error) {
      toast.success("Registration successful! Please log in.");
      router.push("/login");
      return;
    }

    toast.success("Registration successful!");
    router.push("/");
    router.refresh();
  } catch (error: unknown) {
    console.error(error);

    if (error instanceof Error) {
      toast.error(error.message || "Something went wrong");
    } else {
      toast.error("Something went wrong");
    }
  }
};
