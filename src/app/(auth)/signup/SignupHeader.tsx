import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupHeader() {
  return (
    <div>
      <CardHeader className="text-center">
        <CardTitle> SignUp your account</CardTitle>
        <CardDescription>
          inter your information to create a Account
        </CardDescription>
      </CardHeader>
    </div>
  );
}
