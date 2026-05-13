import { Loader2 } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center gap-4">

          <Loader2 className="h-12 w-12 animate-spin text-blue-500" />

          <h2 className="text-2xl font-semibold text-gray-800">
            Loading Dashboard
          </h2>

          <p className="text-sm text-gray-500">
            Please wait while we load your data...
          </p>

        </div>
      </div>
    </div>
  );
}