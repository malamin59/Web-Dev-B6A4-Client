"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SocialLogin from "../SocialLogin/socialLogin";
import { handleSubmit } from "./handleSubmit";
import { useLoginRouter } from "@/hooks/login.router";

export default function LoginFrom() {
  const router = useLoginRouter();
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, router)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" name="password" type="password" required />
            <Link
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          {/* Login Button */}
          <Button type="submit" className="w-full mb-2">
            Login
          </Button>
        </div>
        <SocialLogin />
      </form>
    </div>
  );
}
