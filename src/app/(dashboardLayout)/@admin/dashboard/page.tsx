"use client";

import axiosInstance from "@/app/service/axios";
import { useQuery } from "@tanstack/react-query";

import DashboardDetailPage from "./components/DashboardDetailPage";
import DashboardBarChart from "./components/charts/DashboardBarChart";
import DashboardLineChart from "./components/charts/DashboardLineChart";
import DashboardPieChart from "./components/charts/DashboardPieChart";

export default function AdminDashboard() {
  // Cards data
  const { data: getAll } = useQuery({
    queryKey: ["getAdminDashboardCounts"],
    queryFn: async () => {
      const result = await axiosInstance.get("/admin/getAdminDashboardCounts");

      return result.data.data;
    },
  });

  // Charts data
  const { data: charts } = useQuery({
    queryKey: ["getAdminDashboardCharts"],
    queryFn: async () => {
      const result = await axiosInstance.get("/admin/getAdminDashboardCharts");

      return result.data.data;
    },
  });

  return (
    <div className="space-y-6">
      {/* Dashboard Cards */}
      <DashboardDetailPage stats={getAll} />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-4">
        <DashboardBarChart data={charts?.barChart || []} />

        <DashboardPieChart data={charts?.pieChart || []} />

        <div className="lg:col-span-2">
          <DashboardLineChart data={charts?.lineChart || []} />
        </div>
      </div>
    </div>
  );
}
