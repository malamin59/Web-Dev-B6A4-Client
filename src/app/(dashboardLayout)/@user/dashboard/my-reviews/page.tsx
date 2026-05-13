"use client";

import axiosInstance from "@/app/service/axios";
import { useUserRole } from "@/hooks/userRole";
import { useQuery } from "@tanstack/react-query";
import DashboardLoading from "../loading";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import DashboardError from "@/app/(dashboardLayout)/dashboardError";
import EmptyPage from "@/app/(dashboardLayout)/EmptyPage";

export default function MyReviewsPage() {
  const { id } = useUserRole();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["my-reviews", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/reviews/my-reviews/${id}`);
      return res.data.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <DashboardLoading />;
  if (isError) return <DashboardError />;

  if (!data || data.length === 0) {
    return <EmptyPage />;
  }

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">My Reviews</h1>

      <DataTable columns={columns} data={data || []} />
    </div>
  );
}
