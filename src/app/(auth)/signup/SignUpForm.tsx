import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { handleSubmit } from "./handleSubmit";
import SocialLogin from "../SocialLogin/socialLogin";
import { useLoginRouter } from "@/hooks/login.router";
export default function SignUpForm() {

  const router = useLoginRouter()

  return (
    <div>
      {" "}
      <form onSubmit={(e) => handleSubmit(e, router)}>
        <div className="flex flex-col gap-6">
          {/* Name */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" required />
          </div>

          {/* Phone */}
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="text" required />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          {/* Password */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>

            {/* Role */}
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>

            <select
              id="role"
              name="role"
              required
              className="border rounded-md h-10 px-3 bg-background"
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </div>

          {/* SignUp Button */}
          <Button type="submit" className="w-full mb-2">
            Login
          </Button>
        </div>
        {/* Social Login */}
        <SocialLogin />
      </form>
    </div>
  );
}
