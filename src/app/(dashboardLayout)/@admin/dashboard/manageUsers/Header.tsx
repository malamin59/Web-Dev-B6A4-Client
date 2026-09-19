import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

export default function Header() {
  return (
    <div>
      {" "}
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[250px]">User</TableHead>

          <TableHead>Role</TableHead>

          <TableHead>Provider</TableHead>

          <TableHead>Phone</TableHead>

          <TableHead>Joined</TableHead>

          <TableHead>Tutor Profile</TableHead>
        </TableRow>
      </TableHeader>
    </div>
  );
}
