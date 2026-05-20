import {
  Users,
  GraduationCap,
  BookOpen,
  CalendarCheck,
  Star,
} from "lucide-react";

export default function DashboardDetailPage({ stats }: any) {
  const dashboardStats = [
    {
      title: "Total Users",
      value: stats?.totalUsers || 0,
      icon: Users,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      barColor: "bg-blue-500",
      fill: 78,
      trend: "+12%",
    },
    {
      title: "Total Tutors",
      value: stats?.totalTutors || 0,
      icon: GraduationCap,
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
      barColor: "bg-green-500",
      fill: 55,
      trend: "+8%",
    },
    {
      title: "Total Students",
      value: stats?.totalStudents || 0,
      icon: BookOpen,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
      barColor: "bg-purple-500",
      fill: 88,
      trend: "+15%",
    },
    {
      title: "Total Bookings",
      value: stats?.totalBookings || 0,
      icon: CalendarCheck,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      barColor: "bg-orange-500",
      fill: 63,
      trend: "+5%",
    },
    {
      title: "Total Reviews",
      value: stats?.totalReviews || 0,
      icon: Star,
      iconBg: "bg-pink-50",
      iconColor: "text-pink-500",
      barColor: "bg-pink-500",
      fill: 91,
      trend: "+21%",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 p-4">
      {dashboardStats.map((item, index) => (
        <div
          key={index}
          className={`bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200
            ${index === dashboardStats.length - 1 && dashboardStats.length % 2 !== 0 ? "col-span-2 lg:col-span-1" : ""}
          `}
        >
          {/* Top row */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1.5">
                {item.title}
              </p>
              <p className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 leading-none">
                {item.value.toLocaleString()}
              </p>
            </div>
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.iconBg}`}
            >
              <item.icon className={`w-5 h-5 ${item.iconColor}`} />
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1 w-full rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
            <div
              className={`h-full rounded-full ${item.barColor} transition-all duration-700`}
              style={{ width: `${item.fill}%` }}
            />
          </div>

          {/* Footer */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              ↑ {item.trend}
            </span>
            <span className="text-[11px] text-neutral-400">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}