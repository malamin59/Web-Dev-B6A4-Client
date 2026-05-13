import React from "react";

export default function BookingLayout({ booking }: any) {
  return (
    <div
      className="
      border
      rounded-2xl
      p-6
      shadow-sm 
      hover:shadow-md
      transition
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        <div>
          <p className="text-sm text-gray-500">Tutor Name</p>

          <h2 className="text-2xl font-bold">{booking?.tutor?.user?.name}</h2>
        </div>

        <div>
          <p className="text-sm text-gray-500">Expertise</p>

          <p className="font-medium">{booking?.tutor?.expertise}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Hourly Rate</p>

          <p className="font-medium">${booking?.tutor?.hourlyRate}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Status</p>

          <p
            className="
            font-semibold
            text-green-600
            "
          >
            {booking?.status}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Booking Date</p>

          <p className="font-medium">
            {new Date(booking?.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
