"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"; 
import { FaGithub } from "react-icons/fa";
import { GoogleIcon } from "./GoogleIcon";

export default function SocialLogin() {
  return (
    <div className="space-y-2">
      {/* Google Login */}
      <Button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        variant="outline"
        className="w-full flex items-center gap-2"
      >
        <GoogleIcon/>
        Login with Google
      </Button>

      {/* GitHub Login */}
      <Button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        variant="outline"
        className="w-full flex items-center gap-2"
      >
        <FaGithub size={20} />
        Login with GitHub
      </Button>
    </div>
  );
}