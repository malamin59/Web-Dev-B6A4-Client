import { Loader2, CheckCircle, Save } from "lucide-react";
import { cn } from "@/lib/utils";
export default function UpdateButton({ isPending, isError, isSuccess }: any) {
  return (
    <div>
      {" "}
      <button
        type="submit"
        disabled={isPending || isSuccess}
        className={cn(
          // base
          "w-full flex items-center justify-center gap-2.5 cursor-pointer",
          "px-5 py-3.5 rounded-xl text-[15px] font-medium border",
          "transition-all duration-150 active:scale-[0.98]",

          // default — solid black
          !isPending &&
            !isSuccess &&
            !isError &&
            "bg-black text-white hover:bg-black/85 border-transparent",

          // loading — dimmed black
          isPending &&
            "bg-black text-white opacity-60 cursor-not-allowed border-transparent",

          // success — green
          isSuccess &&
            "bg-green-50 text-green-900 border-green-200 cursor-default",

          // error — red
          isError && "bg-red-50 text-red-900 border-red-200 hover:bg-red-100",
        )}
      >
        {isPending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Updating…
          </>
        ) : isSuccess ? (
          <>
            <CheckCircle size={18} />
            Profile updated!
          </>
        ) : isError ? (
          <>
            <Save size={18} />
            Try again
          </>
        ) : (
          <>
            <Save size={18} />
            Update Profile
          </>
        )}
      </button>
    </div>
  );
}
