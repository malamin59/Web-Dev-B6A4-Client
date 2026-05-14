import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "what-is-skillbridge",
    question: "What is SkillBridge?",
    answer:
      "SkillBridge is a platform that connects learners with expert tutors. Students can browse tutor profiles, view availability, and book sessions instantly.",
  },
  {
    value: "how-book-session",
    question: "How do I book a tutoring session?",
    answer:
      "Browse available tutors, check their schedules, and book a session instantly based on real-time availability — no back-and-forth needed.",
  },
  {
    value: "tutor-management",
    question: "How do tutors manage their profiles?",
    answer:
      "Tutors can create and update their profiles, set availability, and manage upcoming sessions through their personal dashboard.",
  },
  {
    value: "admin-role",
    question: "What can admins do on SkillBridge?",
    answer:
      "Admins oversee the entire platform, manage students and tutors, and ensure smooth operation of the system.",
  },
];

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {faqs.map(({ value, question, answer }) => (
        <AccordionItem
          key={value}
          value={value}
          className="border border-border/40 rounded-xl px-2 hover:border-border/70 transition-colors"
        >
          <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
            {question}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}