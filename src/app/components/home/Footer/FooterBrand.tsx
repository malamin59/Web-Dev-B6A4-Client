import { BookOpen } from "lucide-react";

export default function FooterBrand() {
  return (
    <div>
      <div className="flex items-center gap-2 text-base font-medium text-foreground mb-3">
        <BookOpen size={20} className="text-blue-600" />
        SkillBridge
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mb-5">
        Connecting students with expert tutors. Learn smarter, grow faster.
      </p>
      <div className="flex gap-2">
        {[
          { icon: "brand-twitter", label: "Twitter" },
          { icon: "brand-linkedin", label: "LinkedIn" },
          { icon: "brand-instagram", label: "Instagram" },
          { icon: "brand-github", label: "GitHub" },
        ].map(({ icon, label }) => (
          
          <a  key={label}
            aria-label={label}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/40 bg-background text-muted-foreground hover:text-foreground hover:border-border/70 transition-colors cursor-pointer"
          >
            <i className={`ti ti-${icon} text-base`} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}