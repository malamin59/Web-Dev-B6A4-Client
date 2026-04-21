type BannerButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

function BannerButton({ children, variant = "primary" } : BannerButtonProps) {
  const baseStyle = "px-6 py-3 rounded-2xl font-semibold transition";

  const styles = {
    primary:
      "bg-white text-indigo-600 shadow-md hover:scale-105",
    secondary:
      "border border-white hover:bg-white hover:text-indigo-600",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default BannerButton