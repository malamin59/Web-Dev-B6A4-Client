import { CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function   LoginFooter() {
  return (
    <div>
      <CardFooter className="flex flex-col gap-3">
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
