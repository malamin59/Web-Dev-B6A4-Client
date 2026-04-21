import React from "react";
import { Navbar1 } from "../components/navbar";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <Navbar1/>
    {children}
    </div>;
}
