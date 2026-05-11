"use client";

import axiosInstance from "@/app/service/axios";
import { Button } from "@/components/ui/button";
import { useUserRole } from "@/hooks/userRole";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function BookSessionButton({ tutorId }: { tutorId: string }) {
  const queryClient = useQueryClient();

  const bookingMutation = useMutation({
    mutationFn: async () => {
      return await axiosInstance.post("/bookings", {
        studentId: id,
        tutorId,
        date: new Date(),
      });
    },

    onSuccess: () => {
      toast.success("Booking created successfully");

      // refresh booking list
      queryClient.invalidateQueries({
        queryKey: ["student-booking"],
      });
    },

    onError: (error: any) => {
      // toast.error("Something went wrong");
      const message = error?.response?.data?.message || "Something went wrong";

      toast.error(message);
    },
  });

  const { id, isAuthenticated } = useUserRole();

  const handleBooking = () => {
    if (!isAuthenticated) {
      toast.error("Please login first");
      return;
    }

    bookingMutation.mutate();
  };

  return (
    <Button onClick={handleBooking} className="mt-8 w-full">
      Book Session
    </Button>
  );
}
