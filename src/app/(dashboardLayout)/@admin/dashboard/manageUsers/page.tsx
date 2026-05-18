"use client";
import axiosInstance from "@/app/service/axios";
import { useQuery } from "@tanstack/react-query";
import UserDetail from "./userDetail";
import LoadingPage from "@/app/(dashboardLayout)/@user/dashboard/loading";
export default function ManageUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosInstance.get("/admin/getAllUsers");
      return res.data.data;
    },
  });
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="space-y-5">
      <h1 className="text-2xl text-center text-blue-800 lg:my-4">Manage Users</h1>

      {users?.map((user: any) => (
        <UserDetail key={user.id} user={user} />
      ))}
    </div>
  );
}
