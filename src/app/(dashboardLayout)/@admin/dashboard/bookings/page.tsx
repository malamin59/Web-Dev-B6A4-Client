"use client";

import LoadingPage from "@/app/(dashboardLayout)/@user/dashboard/loading";
import axiosInstance from "@/app/service/axios";
import { useQuery } from "@tanstack/react-query";
import BookingsDetail from "./bookingsDetail";

export default function BookingsPage() {
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings"],

    queryFn: async () => {
      const result = await axiosInstance.get("/bookings/getAllBookings");

      return result.data.data;
    },
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
   <div className="max-w-7xl mx-auto px-2">
  <h1 className="text-2xl text-center text-blue-800 my-4">All Bookings</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {bookings?.map((booking: any) => (
      <BookingsDetail key={booking.id} booking={booking} />
    ))}
  </div>
</div>
  );
}
