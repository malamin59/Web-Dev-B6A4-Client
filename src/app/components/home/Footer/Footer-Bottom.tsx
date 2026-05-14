import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="border-t border-border/40 px-4 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
      <p className="text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} SkillBridge. All rights reserved.
      </p>
      <div className="flex gap-4">
        {["Privacy", "Terms", "Cookies"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}