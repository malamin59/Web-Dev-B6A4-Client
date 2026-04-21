import Link from "next/link";

type FooterLinkProps = {
  href: string;
  label: string;
};

export default function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link href={href} className="block hover:text-white transition">
      {label}
    </Link>
  );
}