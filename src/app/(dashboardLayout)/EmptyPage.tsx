import { Inbox } from "lucide-react";

export default function EmptyPage({
  text = "No data found",
}: {
  text?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Inbox className="h-14 w-14 text-gray-400" />

      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Nothing Here
      </h2>

      <p className="mt-2 text-gray-500 text-center">
        {text}
      </p>
    </div>
  );
}