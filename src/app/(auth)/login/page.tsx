"use client"
import {
  Card
} from "@/components/ui/card"
import LoginHeader from "./LoginHeader"
import LoginContent from "./LoginContent"
import LoginFooter from "./LoginFooter"

export default function Login() {
  return (
   <div className="min-h-screen flex items-center justify-center ">
     <Card className="w-full max-w-sm">
      {/* Login Header */}
      <LoginHeader/>
      {/* LoginContent */}
     <LoginContent/>
      {/* LoginFooter */}
      <LoginFooter/>
    </Card>
   </div>
  )
}
