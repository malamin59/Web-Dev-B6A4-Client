
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"; 
import { FaGithub } from "react-icons/fa";

export default function GithubLogin() {
  return (
    <div>
      {" "}
      <Button
        onClick={() => signIn("github", { callbackUrl: "/" })}
        variant="outline"
        className="w-full flex items-center gap-2"
      >
        <FaGithub size={20} />
        Login with GitHub
      </Button>
    </div>
  );
}
