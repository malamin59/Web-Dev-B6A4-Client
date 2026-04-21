type FooterSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 text-sm space-y-2">{children}</div>
    </div>
  );
}