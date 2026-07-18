
"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { suggestedQuestions } from "./data";


interface SuggestedQuestionsProps {
  onClick: (question: string) => void;
}

export default function SuggestedQuestions({
  onClick,
}: SuggestedQuestionsProps) {
  return (
    <div className="mt-10 w-full max-w-3xl">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="font-semibold text-lg">
          Try asking
        </h3>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {suggestedQuestions.map((question) => (
          <Button
            key={question}
            variant="outline"
            className="h-auto justify-start rounded-xl p-4 text-left whitespace-normal transition-all hover:border-primary hover:bg-primary/5"
            onClick={() => onClick(question)}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
}