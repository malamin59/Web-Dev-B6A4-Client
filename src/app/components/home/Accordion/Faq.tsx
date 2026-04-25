import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      <AccordionItem value="what-is-skillbridge" className="border-white/20">
        <AccordionTrigger className="text-left text-white hover:no-underline">
          What is SkillBridge?
        </AccordionTrigger>
        <AccordionContent className="text-white/80">
          SkillBridge is a full-stack web application that connects learners
          with expert tutors. Students can browse tutor profiles, view
          availability, and book sessions instantly.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="how-book-session" className="border-white/20">
        <AccordionTrigger className="text-left text-white hover:no-underline">
          How do I book a tutoring session?
        </AccordionTrigger>
        <AccordionContent className="text-white/80">
          Students can browse available tutors, check their schedules, and book
          a session instantly based on real-time availability.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="tutor-management" className="border-white/20">
        <AccordionTrigger className="text-left text-white hover:no-underline">
          How do tutors manage their profiles?
        </AccordionTrigger>
        <AccordionContent className="text-white/80">
          Tutors can create and update their profiles, set their availability,
          and manage upcoming teaching sessions through their dashboard.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="admin-role" className="border-white/20">
        <AccordionTrigger className="text-left text-white hover:no-underline">
          What can admins do on SkillBridge?
        </AccordionTrigger>
        <AccordionContent className="text-white/80">
          Admins oversee the entire platform, manage users (students and
          tutors), and ensure smooth operation of the system.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
