"use client";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function UserDetail({ user }: any) {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden max-w-6xl m-2">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-5">
        <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium text-lg flex-shrink-0">
          {getInitials(user.name)}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 truncate">
            {user.name}
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate">
            {user.email}
          </p>
        </div>
        <span className="ml-auto flex-shrink-0 text-[11px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          {user.role}
        </span>
      </div>

      <div className="h-px bg-neutral-100 dark:bg-neutral-800 mx-6" />

      {/* Info Grid */}
      <div className="grid grid-cols-2">
        {[
          { icon: "📞", label: "Phone", value: user.phone || "No phone" },
          { icon: "🔐", label: "Provider", value: user.provider },
          {
            icon: "📅",
            label: "Joined",
            value: new Date(user.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          },
          {
            icon: "🪪",
            label: "Tutor profile",
            value: user.tutor ? "Created" : "Not created",
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

      {/* Tutor Section */}
      {user.tutor ? (
        <div className="flex items-center gap-4 px-6 py-4 bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-100 dark:border-neutral-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
          <div>
            <p className="text-[11px] uppercase tracking-wider text-neutral-400 mb-0.5">
              Expertise
            </p>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              {user.tutor.expertise}
            </p>
          </div>
          <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-700 mx-1" />
          <div>
            <p className="text-[11px] uppercase tracking-wider text-neutral-400 mb-0.5">
              Hourly rate
            </p>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              ${user.tutor.hourlyRate} / hr
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 px-6 py-3.5 border-t border-neutral-100 dark:border-neutral-800">
          <span className="text-sm text-neutral-400">No tutor profile yet</span>
        </div>
      )}
    </div>
  );
}