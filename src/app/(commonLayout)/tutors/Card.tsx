import { ArrowRight, BookOpen, Coins } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Card({tutor}) {
  return (
     <div
            key={tutor.id}
            className="border border-border/40 rounded-xl p-5 flex flex-col gap-3 hover:border-border/70 transition-colors bg-background"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-sm font-medium text-blue-800 shrink-0">
                {tutor.user.name.charAt(0)}
              </div>
              <p className="text-sm font-medium text-foreground truncate">
                {tutor.user.name}
              </p>
            </div>

            {/* Expertise badge */}
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-1 rounded-md bg-green-50 text-green-800 border border-green-200 w-fit">
              <BookOpen size={11} />
              {tutor.expertise}
            </span>

            {/* Bio */}
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {tutor.bio}
            </p>

            <hr className="border-border/30" />

            {/* Rate */}
            <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
              <Coins size={15} className="text-muted-foreground/60" />$
              {tutor.hourlyRate} / hour
            </div>

            {/* CTA */}
            <Link href={`/tutors/${tutor.id}`}>
              <button className="w-full flex cursor-pointer items-center justify-center gap-2 py-2.5 rounded-lg bg-black text-white text-[13px] font-medium hover:opacity-85 active:scale-[0.98] transition-all">
                View details
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
  )
}
