import React from "react";
import { CalendarDays } from "lucide-react";

const ALL_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function TutorAvailability({ tutor }: any) {
  // Build a quick lookup: day name → slot
  const slotMap = Object.fromEntries(
    tutor.availability.map((s: any) => [s.day, s]),
  );

  return (
    <div className="px-6 md:px-8 py-6 border-t border-border/30">
      <h2 className="flex items-center gap-2 text-base font-medium text-foreground mb-4">
        <CalendarDays size={18} className="text-muted-foreground/60" />
        Availability
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {ALL_DAYS.map((day) => {
          const slot = slotMap[day];
          return (
            <div
              key={day}
              className={`rounded-xl p-3 flex flex-col gap-1 border transition-colors ${
                slot
                  ? " border-blue-200"
                  : "bg-muted/40 border-border/30"
              }`}
            >
              <span
                className={`text-[11px] font-medium uppercase tracking-widest ${
                  slot ? "text-blue-600" : "text-muted-foreground/50"
                }`}
              >
                {day.slice(0, 3)}
              </span>

              {slot ? (
                <>
                  <span className="text-sm font-medium text-blue-900 leading-tight">
                    {slot.startTime} - {slot.endTime}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-0.5" />
                </>
              ) : (
                <span className="text-sm text-muted-foreground/50">
                  Not available
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
