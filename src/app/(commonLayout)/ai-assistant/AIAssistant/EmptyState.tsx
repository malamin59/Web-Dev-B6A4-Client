import { Sparkles } from "lucide-react";
import SuggestedQuestions from "./SuggestedQuestions";


interface Props {
  onQuestionClick: (question: string) => void;
}

export default function EmptyState({
  onQuestionClick,
}: Props) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="mb-6 rounded-full bg-primary p-5 text-primary-foreground">
        <Sparkles size={40} />
      </div>

      <h1 className="text-3xl font-bold">
        SkillBridge AI
      </h1>

      <p className="mt-3 max-w-xl text-center text-muted-foreground">
        I m your AI assistant.
        Ask me anything about SkillBridge,
        tutors, courses, bookings,
        or support.
      </p>

      <SuggestedQuestions
        onClick={onQuestionClick}
      />
    </div>
  );
}