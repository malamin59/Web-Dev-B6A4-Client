"use client";

import axiosInstance from "@/app/service/axios";
import { useUserRole } from "@/hooks/userRole";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CalendarPlus, Lock, CheckCircle, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

export default function BookSessionButton({ tutorId }: { tutorId: string }) {
  const queryClient = useQueryClient();
  const { id, isAuthenticated, role } = useUserRole();
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
      queryClient.invalidateQueries({ queryKey: ["student-booking"] });
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || "Something went wrong";
      toast.error(message);
    },
  });

  const handleBooking = () => {
    if (!isAuthenticated) {
      toast.error("Please login first");
      return;
    }
    if (role === "TUTOR") {
      toast.error(`Tutor Can't book session`);
      return;
    }
    bookingMutation.mutate();
  };

  const isPending = bookingMutation.isPending;
  const isSuccess = bookingMutation.isSuccess;

  return (
    <button
      onClick={handleBooking}
      disabled={isPending || isSuccess} 
      className={cn(
        // base
        "w-full flex items-center justify-center border cursor-pointer gap-2.5",
        "px-5 py-3.5 rounded-xl text-[15px] font-medium",
        "transition-all duration-150 active:scale-[0.98]",

        // default — solid black
        !isPending &&
          !isSuccess &&
          isAuthenticated &&
          "bg-black text-white hover:bg-black/85",

        // not logged in — outlined
        !isAuthenticated &&
          !isPending &&
          !isSuccess &&
          "bg-transparent border border-border text-foreground hover:bg-muted/50",

        // loading — black dimmed
        isPending && "bg-black text-white opacity-60 cursor-not-allowed",

        // success — green
        isSuccess &&
          "bg-green-50 text-green-900 border border-green-200 cursor-default",
      )}
    >
      {isPending ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          Booking…
        </>
      ) : isSuccess ? (
        <>
          <CheckCircle size={18} />
          Booking confirmed!
        </>
      ) : isAuthenticated ? (
        <>
          <CalendarPlus size={18} />
          Book a session
        </>
      ) : (
        <>
          <Lock size={18} />
          Login to book a session
        </>
      )}
    </button>
  );
}
