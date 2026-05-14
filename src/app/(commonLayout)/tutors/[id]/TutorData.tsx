// TutorData.tsx
import { Mail, Phone, BookOpen, BadgeDollarSign, MapPin, Star } from "lucide-react";

export default function TutorData({ tutor }: { tutor: any }) {
  return (
    <div className="bg-secondary/40 border-b border-border/30 p-6 md:p-8">

      {/* Top row: avatar + info */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-5">

        {/* Avatar */}
        <div className="w-20 h-20 shrink-0 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-3xl font-medium text-blue-800">
          {tutor.user.name.charAt(0)}
        </div>

        {/* Name, bio, badges */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-medium text-foreground leading-tight mb-1.5">
            {tutor.user.name}
          </h1>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-3">
            {tutor.bio}
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-green-50 text-green-800 border border-green-200">
              <BookOpen size={12} />
              {tutor.expertise}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
              <BadgeDollarSign size={12} />
              ${tutor.hourlyRate} / hour
            </span>
          </div>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 pt-5 border-t border-border/30">
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail size={15} className="text-muted-foreground/60" />
          {tutor.user.email}
        </span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone size={15} className="text-muted-foreground/60" />
          {tutor.user.phone}
        </span>
      </div>
    </div>
  );
}