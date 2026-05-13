"use client";
import { Mail, Phone, Calendar, User } from "lucide-react";
import axiosInstance from "@/app/service/axios";
import { useUserRole } from "@/hooks/userRole";
import { useQuery } from "@tanstack/react-query";

export default function TutorBookingsPage() {
  const { id } = useUserRole();
  console.log(id);
  const { data: bookings } = useQuery({
    queryKey: ["tutor-bookings", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/bookings/tutor/${id}`);
      return res.data.data;
    },

    enabled: !!id,
  });
  console.log(bookings);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl text-center font-bold mb-6">Tutor Bookings</h1>

      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {bookings?.map((b: any) => (
          <div
            key={b.id}
            className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <User size={18} />
                {b.student.name}
              </h2>

              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  b.status === "PENDING"
                    ? "bg-yellow-100 text-yellow-700"
                    : b.status === "CONFIRMED"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {b.status}
              </span>
            </div>

            {/* Info */}
            <div className="mt-3 space-y-2 text-gray-600">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                {b.student.email}
              </p>

              <p className="flex items-center gap-2">
                <Phone size={16} />
                {b.student.phone}
              </p>

              <p className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar size={16} />
                {new Date(b.date).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
