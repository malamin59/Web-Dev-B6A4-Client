
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { handleSubmit } from "./handleSubmit";
import SocialLogin from "../SocialLogin/socialLogin";
import { useLoginRouter } from "@/hooks/login.router";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function SignUpForm() {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const router = useLoginRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative">
      {/* Full Form Loading Overlay */}
      {isLoading && (
        <div
          className="absolute inset-0 z-50 flex flex-col items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm"
          role="status"
          aria-live="polite"
        >
          <LoaderCircle className="h-10 w-10 animate-spin text-primary" />

          <p className="mt-4 text-sm font-medium">
            {otpSent
              ? "Verifying OTP..."
              : "Sending OTP to your email..."}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Please wait, do not close this page.
          </p>
        </div>
      )}

      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            router,
            otpSent,
            setOtpSent,
            setIsLoading
          )
        }
        aria-busy={isLoading}
      >
        <div className="flex flex-col gap-6">
          {/* Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              disabled={isLoading}
            />
          </div>

          {/* Phone */}
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="text"
              required
              disabled={isLoading}
            />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              disabled={isLoading}
            />
          </div>

          {/* Password */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              disabled={isLoading}
            />
          </div>

          {/* OTP */}
          {otpSent && (
            <div className="grid gap-2">
              <Label htmlFor="otp">Email Verification OTP</Label>
              <Input
                id="otp"
                name="otp"
                type="text"
                inputMode="numeric"
                pattern="[0-9]{6}"
                maxLength={6}
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                required
                disabled={isLoading}
              />
            </div>
          )}

          {/* Role */}
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <select
              id="role"
              name="role"
              required
              disabled={isLoading}
              className="h-10 rounded-md border bg-background px-3 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mb-2 w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                {otpSent ? "Verifying OTP..." : "Sending OTP..."}
              </>
            ) : otpSent ? (
              "Verify & Register"
            ) : (
              "Register"
            )}
          </Button>
        </div>

        {/* Social Login */}
        <SocialLogin />
      </form>
    </div>
  );
}
