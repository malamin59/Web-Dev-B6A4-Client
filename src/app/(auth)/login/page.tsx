"use client"
import {
  Card
} from "@/components/ui/card"
import LoginHeader from "./LoginHeader"
import LoginContent from "./LoginContent"
import LoginFooter from "./LoginFooter"
import AuthLayout from "../AuthLayout/AuthLayout"

export default function Login() {
  return (
   <AuthLayout>
    <Card className="w-full max-w-sm">
      {/* Login Header */}
      <LoginHeader/>
      {/* LoginContent */}
     <LoginContent/>
      {/* LoginFooter */}
      <LoginFooter/>
    </Card>
   </AuthLayout>
  )
}
