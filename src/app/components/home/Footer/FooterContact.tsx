import { Mail, Phone, MapPin } from "lucide-react";

const items = [
  { icon: Mail, text: "hello@skillbridge.com" },
  { icon: Phone, text: "+1 (555) 012-3456" },
  { icon: MapPin, text: "San Francisco, CA" },
];

export default function FooterContact() {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60 mb-3">
        Contact
      </p>
      <div className="flex flex-col gap-3">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-2.5">
            <Icon size={14} className="text-muted-foreground/50 mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}