import { AlertTriangle } from "lucide-react";

export default function DashboardError({
  text = "Something went wrong",
}: {
  text?: string;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <AlertTriangle className="h-14 w-14 text-red-500" />

      <h2 className="mt-4 text-2xl font-semibold text-red-600">Oops!</h2>

      <p className="mt-2 text-gray-500 text-center">{text}</p>
    </div>
  );
}
