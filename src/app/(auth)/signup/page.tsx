import { Card } from "@/components/ui/card";
import SignupHeader from "./SignupHeader";
import SignUpContent from "./SignUpContent";
import SignUpFooter from "./SignUpFooter";


export default function Signup() {
  return (
<div className="min-h-screen flex items-center justify-center ">
     <Card className="w-full max-w-sm">
      {/* SignUp Header */}
      <SignupHeader/>
      {/* LoginContent */}
     <SignUpContent/>
      {/* LoginFooter */}
      <SignUpFooter/>
    </Card>
   </div>  )
}
