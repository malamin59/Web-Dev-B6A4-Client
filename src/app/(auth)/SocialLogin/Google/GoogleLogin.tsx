
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"; 
import { GoogleIcon } from "./GoogleIcon";

export default function GoogleLogin() {
  return (
    <div>
        <Button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        variant="outline"
        className="w-full flex items-center gap-2"
      >
        <GoogleIcon/>
        Login with Google
      </Button>
    </div>
  )
}
