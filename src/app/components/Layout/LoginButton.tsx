"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const auth = {
  login:  { title: "Login",   url: "/login" },
  signup: { title: "Sign up", url: "/signup" },
};

export default function LoginButton() {
  const { data: session , status} = useSession();
    if (status === "loading") {
    return <p className="text-sm">Loading...</p>;
  }
  console.log("data from login button 16 number line",session)

  // {session ? () : ()}
  return (
    <div>
      {session ? (
        // Logged in → show Sign out only
        <Button
          onClick={() => signOut()}
          className="w-full mt-2 py-2.5 border border-red-200 text-red-600 hover:bg-red-50 text-sm font-medium rounded-xl transition"
        >
          Sign out
        </Button>
      ) : (
        <>
          <Button asChild variant="outline" size="sm">
            <Link href={auth.login.url}>{auth.login.title}</Link>
          </Button>
          <Button asChild size="sm">
            <Link href={auth.signup.url}>{auth.signup.title}</Link>
          </Button>
        </>
      )}
    </div>
  );
}