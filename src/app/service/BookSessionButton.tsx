"use client";

import axiosInstance from "@/app/service/axios";
import { Button } from "@/components/ui/button";
import { useUserRole } from "@/hooks/userRole";
import toast from "react-hot-toast";

export default function BookSessionButton({ tutorId }: { tutorId: string }) {
  const { id , isAuthenticated } = useUserRole();

  const handleBooking = async () => {
    try {
        if(!isAuthenticated) {
            toast.error("Please login first")
            return
        }
      await axiosInstance.post("/bookings", {
        studentId: id,
        tutorId,
        date: new Date(),
      });

      toast.success("Booking created successfully");
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <Button onClick={handleBooking} className="mt-8 w-full">
      Book Session
    </Button>
  );
}
