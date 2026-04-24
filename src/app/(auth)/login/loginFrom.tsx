import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SocialLogin from "../SocialLogin/socialLogin";
import { handleSubmit } from "./handleSubmit";


export default function LoginFrom() {
  return (
    <div>
         <form onSubmit={handleSubmit}>
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
      <Button type="submit" className="w-full">
        Login
      </Button>
          </div>
          <SocialLogin/>
          
        </form>
    </div>
  )
}
