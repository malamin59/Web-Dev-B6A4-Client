"use client";

import GithubLogin from "./Github/GithubLogin";
import GoogleLogin from "./Google/GoogleLogin";

export default function SocialLogin() {
  return (
    <div className="space-y-2">
      {/* Google Login */}
      <GoogleLogin />
      {/* GitHub Login */}
      <GithubLogin />
    </div>
  );
}
