import {
  Mail,
  Phone,
  Calendar,
  User,
} from "lucide-react";

export default function TutorBookingLayout({
  booking,
}: {
  booking: any;
}) {
  return (
    <div
      className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition bg-white"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <User size={18} />
          {booking?.student?.name}
        </h2>

        <span
          className={`px-3 py-1 text-sm rounded-full ${
            booking.status === "PENDING"
              ? "bg-yellow-100 text-yellow-700"
              : booking.status === "CONFIRMED"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {booking.status}
        </span>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-2 text-gray-600">
        <p className="flex items-center gap-2">
          <Mail size={16} />
          {booking?.student?.email}
        </p>

        <p className="flex items-center gap-2">
          <Phone size={16} />
          {booking?.student?.phone}
        </p>

        <p className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={16} />
          {new Date(booking.date).toLocaleString()}
        </p>
      </div>
    </div>
  );
}