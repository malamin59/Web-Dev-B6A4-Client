import {
  GraduationCap,
  CalendarDays,
  Wallet,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function DashboardDetailPage() {
  return (
    <div className="min-h-screen p-2">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl mt-1 text-center font-bold text-blue-800">
          Tutor Dashboard
        </h1>
        <p className="text-slate-500 text-center mt-2">
          Manage your sessions, earnings, and students.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="group  rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Students</span>
            <GraduationCap className="h-6 w-6 text-indigo-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="h-10 mt-4 rounded bg-slate-100 animate-pulse" />
        </div>

        <div className="group  rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Sessions</span>
            <CalendarDays className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="h-10 mt-4 rounded bg-slate-100 animate-pulse" />
        </div>

        <div className="group  rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Earnings</span>
            <Wallet className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform" />
          </div>
          <div className="h-10 mt-4 rounded bg-slate-100 animate-pulse" />
        </div>

        <div className="group  rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Reviews</span>
            <Star className="h-6 w-6 text-yellow-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="h-10 mt-4 rounded bg-slate-100 animate-pulse" />
        </div>
      </div>

      {/* Main Section */}
      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        {/* Analytics */}
        <div className="lg:col-span-2  border rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-lg">Analytics Overview</h2>
          </div>

          <div
            className="h-72 rounded-xl bg-gradient-to-r from-slate-500
           to-slate-800 flex items-center justify-center"
          >
            <p className="text-blue-900">Analytics Chart Here</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className=" border rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-lg mb-5">Quick Actions</h2>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 rounded-xl border  transition">
              <Link href={"/dashboard/tutors"}>
                <span>Crete Profile</span>
              </Link>
              <ArrowRight size={18} />
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-xl border  transition">
              <Link href={"/dashboard/tutor-bookings"}>
                <span>Manage Booking</span>
              </Link>
              <ArrowRight size={18} />
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-xl border  transition">
              <Link href={"/dashboard/availability"}>
              <span>Set availability</span>
              </Link>{" "}
              <ArrowRight size={18} />
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-xl border  transition">
              <Link href={"/dashboard/received-reviews"}>
              <span>Manage Reviews</span>
              </Link>{" "}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
