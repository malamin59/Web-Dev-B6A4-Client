"use client";
import axiosInstance from "@/app/service/axios";
import { useQuery } from "@tanstack/react-query";
import DashboardDetailPage from "./components/DashboardDetailPage";

export default function AdminDashboard() {
  const { data: getAll, isLoading } = useQuery({
    queryKey: ["getAdminDashboardCounts"],
    queryFn: async () => {
      const result = await axiosInstance.get("/admin/getAdminDashboardCounts");
      return result.data.data;
    },
  });
  console.log(getAll);
  return (
    <div>
      {" "}
      <DashboardDetailPage stats={getAll} />{" "}
    </div>
  );
}
