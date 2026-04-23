import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginHeader() {
  return (
    <div>
      <CardHeader className="text-center">
        <CardTitle >Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
    </div>
  );
}
