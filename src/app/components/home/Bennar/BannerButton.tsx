type BannerButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function BannerButton({
  children,
  variant = "primary",
  onClick,
}: BannerButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 active:scale-[0.98]";

  const styles = {
    primary: "bg-black text-white hover:opacity-85",
    secondary:
      "bg-transparent text-foreground border border-border hover:bg-muted/50",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}