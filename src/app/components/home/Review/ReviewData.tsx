import { CalendarDays, User } from "lucide-react";

export default function ReviewData({ review }: { review: any }) {
  return (
    <div className=" h-65 break-inside-avoid  rounded-2xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-all duration-300">
      {/* User */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {review.user.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h3 className="font-semibold text-base">{review.user.name}</h3>
          <p className="text-sm text-muted-foreground">{review.user.email}</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-2">{review.title}</h2>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-7">
        {review.description}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-2 mt-5 text-xs text-muted-foreground">
        <CalendarDays size={14} />
        <span>
          {new Date(review.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
