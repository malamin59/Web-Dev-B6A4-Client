"use client";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";
import FooterContact from "./FooterContact";
import FooterBrand from "./FooterBrand";
import FooterBottom from "./Footer-Bottom";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <FooterBrand />
        <FooterSection title="Quick Links">
          <FooterLink href="/" label="Home" />
          <FooterLink href="/tutors" label="Find Tutors" />
          <FooterLink href="/become-tutor" label="Become a Tutor" />
          <FooterLink href="/dashboard" label="Dashboard" />
        </FooterSection>
        <FooterSection title="Support">
          <FooterLink href="/help" label="Help Center" />
          <FooterLink href="/privacy" label="Privacy Policy" />
          <FooterLink href="/terms" label="Terms & Conditions" />
        </FooterSection>
        <FooterContact />
      </div>
      {/* Footer Bottom */}
      <FooterBottom />
    </footer>
  );
}
