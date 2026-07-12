import Tutors from "@/app/(commonLayout)/tutors/Tutors";

export default function SkillsPage() {
  return (
    <main className="container mx-auto px-4">
      <Tutors showSearch={false} />
    </main>
  );
}
