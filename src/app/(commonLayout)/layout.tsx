import React from "react";
import { Navbar1 } from "../components/Layout/navbar";

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
