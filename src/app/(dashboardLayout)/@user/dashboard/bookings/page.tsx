"use client";
import axiosInstance from "@/app/service/axios";
import { useUserRole } from "@/hooks/userRole";
import { useQuery } from "@tanstack/react-query";
import BookingLayout from "./BookingLayout";

export default function BookingPage() {
  const { id } = useUserRole();

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["student-booking", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/bookings/student/${id}`);
      return res.data.data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return <p className="text-center">loading..........</p>;
  }
  if (error) {
    return <p>Error.............</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      <div className="space-y-5">
        {bookings?.map((booking: any) => (
          <BookingLayout key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
}
