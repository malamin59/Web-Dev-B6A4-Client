import { Button } from "@/components/ui/button";
import { CardAction, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function LoginFooter() {
  return (
    <div>
      <CardFooter className="flex flex-col gap-3">
      {/* Login Button */}
      <Button type="submit" className="w-full">
        Login
      </Button>

      {/* Google Login */}
      <Button variant="outline" className="w-full">
        Login with Google
      </Button>

      {/* Redirect to Signup */}
      <p className="text-sm text-center">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </CardFooter>
    </div>
  );
}
