import { TableHead, TableRow } from "@/components/ui/table";
import React from "react";

export default function Row() {
  return (
    <TableRow>
      <TableHead colSpan={6} className="h-24 text-center">
        No users found.
      </TableHead>
    </TableRow>
  );
}
