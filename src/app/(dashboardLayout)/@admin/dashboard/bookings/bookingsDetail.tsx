function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getStatusStyles(status: string) {
  switch (status.toLowerCase()) {
    case "confirmed":
      return "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300";
    case "cancelled":
      return "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300";
    default:
      return "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300";
  }
}

export default function BookingsDetail({ booking }: any) {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden max-w-2xl">
    
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-5">
        <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium text-lg flex-shrink-0">
          {getInitials(booking.student.name)}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 truncate">
            {booking.student.name}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
            {booking.student.email}
          </p>
        </div>
        <span
          className={`ml-auto flex-shrink-0 text-[11px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-md ${getStatusStyles(booking.status)}`}
        >
          {booking.status}
        </span>
      </div>

      <div className="h-px bg-neutral-100 dark:bg-neutral-800 mx-6" />

      {/* Info Grid */}
      <div className="grid grid-cols-2">
        {[
          { icon: "👤", label: "Tutor", value: booking.tutor.user.name },
          { icon: "🎓", label: "Expertise", value: booking.tutor.expertise },
          {
            icon: "💵",
            label: "Hourly rate",
            value: `$${booking.tutor.hourlyRate} / hr`,
          },
          {
            icon: "📅",
            label: "Booking date",
            value: new Date(booking.date).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
            }),
          },
        ].map((field, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 px-6 py-4
              ${i % 2 === 1 ? "border-l border-neutral-100 dark:border-neutral-800" : ""}
              ${i >= 2 ? "border-t border-neutral-100 dark:border-neutral-800" : ""}
            `}
          >
            <div className="w-8 h-8 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-sm flex-shrink-0">
              {field.icon}
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-0.5">
                {field.label}
              </p>
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                {field.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer strip */}
      <div className="flex items-center gap-4 px-6 py-4 bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-100 dark:border-neutral-800">
        <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
        <div>
          <p className="text-[11px] uppercase tracking-wider text-neutral-400 mb-0.5">
            Booking ID
          </p>
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            #{booking.id}
          </p>
        </div>
        <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-700 mx-1" />
        <div>
          <p className="text-[11px] uppercase tracking-wider text-neutral-400 mb-0.5">
            Tutor email
          </p>
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            {booking.tutor.user.email}
          </p>
        </div>
      </div>
    </div>
  );
}