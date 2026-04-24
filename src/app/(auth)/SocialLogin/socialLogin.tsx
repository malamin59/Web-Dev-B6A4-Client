import { Button } from "@/components/ui/button";
import { GoogleIcon } from "./GoogleIcon";

export default function SocialLogin() {
  return (
    <div>
      <Button variant="outline" className="w-full mt-2 flex items-center gap-2">
        <GoogleIcon />
        Login with Google
      </Button>
    </div>
  );
}
