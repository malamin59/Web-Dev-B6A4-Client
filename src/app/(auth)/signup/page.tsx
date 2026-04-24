"use client";
import { Card } from "@/components/ui/card";
import SignupHeader from "./SignupHeader";
import SignUpContent from "./SignUpContent";
import SignUpFooter from "./SignUpFooter";
import AuthLayout from "../AuthLayout/AuthLayout";

export default function Signup() {
  return (
    <AuthLayout>
      <Card className="w-full max-w-sm">
        {/* SignUp Header */}
        <SignupHeader />
        {/* LoginContent */}
        <SignUpContent />
        {/* LoginFooter */}
        <SignUpFooter />
      </Card>
    </AuthLayout>
  );
}
