import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
export default function SignUpForm() {
  return (
    <div>
      {" "}
      <form>
        <div className="flex flex-col gap-6">
          {/* Name Filed */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="name"
              placeholder="enter your name"
              required
            />
          </div>
          {/* Phone Filed */}
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="number"
              placeholder="+008xxxxxxx"
              required
            />
          </div>
          {/* Email Filed */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          {/* PassWord Filed */}
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" required />
            <Link
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
