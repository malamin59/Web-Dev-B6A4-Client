import { Loader2 } from "lucide-react";

export default function LoadingPage({
  text = "Loading...",
}: {
  text?: string;
}) {
  return (
    <div className="flex justify-center items-center max-h-screen">
      <Loader2 className="h-10 w-10 animate-spin text-blue-500" />

      <p className="mt-4 text-gray-500 text-lg">
        {text}
      </p>
    </div>
  );
}