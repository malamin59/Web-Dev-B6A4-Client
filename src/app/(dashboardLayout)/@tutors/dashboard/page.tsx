import {
  BadgeDollarSign,
  BookOpen,
  CalendarDays,
  Star,
  Users,
} from "lucide-react";

export default function TutorsDashboard() {
  return (
    <div className="p-6 space-y-8">

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">Tutor Dashboard</h1>
        <p className="text-gray-500 mt-2">
          Welcome back! Here’s an overview of your tutoring activities.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className=" border rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 font-medium">Total Students</h2>
            <Users className="text-blue-600" size={22} />
          </div>

          <p className="text-3xl font-bold mt-4">120</p>
        </div>

        <div className=" border rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 font-medium">Bookings</h2>
            <CalendarDays className="text-green-600" size={22} />
          </div>

          <p className="text-3xl font-bold mt-4">35</p>
        </div>

        <div className=" border rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 font-medium">Reviews</h2>
            <Star className="text-yellow-500" size={22} />
          </div>

          <p className="text-3xl font-bold mt-4">48</p>
        </div>

        <div className=" border rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 font-medium">Earnings</h2>
            <BadgeDollarSign className="text-purple-600" size={22} />
          </div>

          <p className="text-3xl font-bold mt-4">$2,450</p>
        </div>
      </div>

      {/* Tutor Info */}
      <div className=" border rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-5">

          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600">
            A
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold">AL AMIN</h2>

            <p className="text-gray-500 mt-1">
              Full-Stack Developer & Programming Tutor
            </p>

            <div className="flex items-center gap-2 mt-3 text-gray-700">
              <BookOpen size={18} />
              HTML, CSS, JavaScript, TypeScript, React
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className=" border rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-5">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="border rounded-xl p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">
                New Booking Received
              </h3>

              <p className="text-gray-500 text-sm">
                Student booked a React session.
              </p>
            </div>

            <span className="text-sm text-gray-400">
              2h ago
            </span>
          </div>

          <div className="border rounded-xl p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">
                New Review Added
              </h3>

              <p className="text-gray-500 text-sm">
                “Great tutor! Very helpful.”
              </p>
            </div>

            <span className="text-sm text-gray-400">
              Yesterday
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}