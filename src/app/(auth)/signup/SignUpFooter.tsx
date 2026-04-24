import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function SignUpFooter() {
  return (
 <div>
      <CardFooter className="flex flex-col gap-3">
         {/* Redirect to Signup */}
      <p className="text-sm text-center">
        already  have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </CardFooter>
    </div>  )
}
