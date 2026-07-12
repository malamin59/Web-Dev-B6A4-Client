"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();

  const [search, setSearch] = useState(params.get("search") || "");
  const [rate, setRate] = useState(params.get("rate") || "");

  const handleSearch = () => {
    const query = new URLSearchParams();

    if (search) query.set("search", search);
    if (rate) query.set("rate", rate);

    router.push(`/tutors?${query.toString()}`);
  };

  return (
    <div className="flex   gap-2 mb-8">
      <input
        type="text"
        placeholder="Search by tutor name or expertise..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        className="w-full border rounded-lg px-4 py-2 focus:outline-none"
      />

      <select
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="w-full md:w-48 border rounded-lg px-4 py-2 dark:bg-black focus:outline-none"
      >
        <option value="">All Rates</option>
        <option value="10">10+</option>
        <option value="20">20+</option>
        <option value="30">30+</option>
        <option value="50">50+</option>
      </select>

      <button
        onClick={handleSearch}
        className="w-full md:w-auto bg-blue-700 text-white px-6  rounded-lg"
      >
        Search
      </button>
    </div>
  );
}
