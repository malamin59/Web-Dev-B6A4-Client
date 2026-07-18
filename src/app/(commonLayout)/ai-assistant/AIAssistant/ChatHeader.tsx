import { Bot } from "lucide-react";

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-primary p-2 text-primary-foreground">
          <Bot size={20} />
        </div>

        <div>
          <h2 className="font-semibold">
            SkillBridge AI
          </h2>

          <p className="text-sm text-muted-foreground">
            Ask anything about SkillBridge
          </p>
        </div>
      </div>
    </header>
  );
}