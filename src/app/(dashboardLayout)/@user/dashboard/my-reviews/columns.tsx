import { ColumnDef } from "@tanstack/react-table";

export type Review = {
  id: string;
  rating: number;
  comment: string;
  reviewedUser: {
    name: string;
    email: string;
  };
  createdAt: string;
};

export const columns: ColumnDef<Review>[] = [
  {
    accessorKey: "reviewedUser.name",
    header: "Tutor Name",
    cell: ({ row }) => row.original.reviewedUser.name,
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => `⭐ ${row.original.rating}/5`,
  },
  {
    accessorKey: "comment",
    header: "Comment",
  },
  {
    accessorKey: "createdAt",
    header: "Date & Time",
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleString("en-GB", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
  },
];
