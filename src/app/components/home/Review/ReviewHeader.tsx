import Link from "next/link";
import React from "react";

export default function ReviewHeader() {
  return (
    <div className=" justify-between mb-8">
      <h2 className="text-4xl text-center font-bold text-blue-600">
        What Our Users Say
      </h2>

      <Link
        href="/review"
        className="text-blue-600 hover:text-blue-700 grid mt-2
         justify-end underline font-medium"
      >
        Share Your Experience
      </Link>
    </div>
  );
}
