import React from "react";

export default function AboutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-black text-white min-h-screen overflow-hidden">
      <div className="relative py-2 px-6 lg:px-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

        {children}
      </div>
    </section>
  );
}
