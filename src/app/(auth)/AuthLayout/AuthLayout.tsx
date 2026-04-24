import { AuthLayoutProps } from "../types/AuthLayoutProps";

export default function AuthLayout({children} : AuthLayoutProps) {
  return (
    <div className="min-h-screen flex justify-center items-center m-4 lg:m-0">
        {children}
    </div>
  )
}
