"use client";
import FooterBrand from "./FooterBrand";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";
import FooterContact from "./FooterContact";
import FooterBottom from "./Footer-Bottom";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <FooterBrand />
        <FooterSection title="Quick links">
          <FooterLink href="/" label="Home" />
          <FooterLink href="/tutors" label="Find tutors" />
          <FooterLink href="/become-tutor" label="Become a tutor" />
          <FooterLink href="/dashboard" label="Dashboard" />
        </FooterSection>
        <FooterSection title="Support">
          <FooterLink href="/help" label="Help center" />
          <FooterLink href="/privacy" label="Privacy policy" />
          <FooterLink href="/terms" label="Terms & conditions" />
        </FooterSection>
        <FooterContact />
      </div>
      <FooterBottom />
    </footer>
  );
}