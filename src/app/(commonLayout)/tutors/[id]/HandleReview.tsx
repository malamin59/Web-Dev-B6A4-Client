"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/app/service/axios";
import { toast } from "react-toastify";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const RATING_LABELS: Record<number, string> = {
  1: "Very bad",
  2: "Poor",
  3: "Average",
  4: "Good",
  5: "Excellent",
};

export default function HandleReview({
  reviewerId,
  reviewedUserId,
}: {
  reviewerId: string;
  reviewedUserId: string;
}) {
  const [rating, setRating] = useState(5);
  const [hovered, setHovered] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const queryClient = useQueryClient();

  const reviewMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axiosInstance.post("/reviews", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Review submitted successfully");
      setComment("");
      setRating(5);
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
    onError: () => {
      toast.error("Failed to submit review");
    },
  });

  const handleSubmit = () => {
    reviewMutation.mutate({ rating, comment, reviewerId, reviewedUserId });
  };

  const activeRating = hovered ?? rating;

  return (
    <div className="border border-border/40 rounded-xl p-5 bg-background space-y-5">
      {/* Star rating */}
      <div className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Your rating
        </p>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setRating(v)}
              onMouseEnter={() => setHovered(v)}
              onMouseLeave={() => setHovered(null)}
              className="text-3xl transition-transform hover:scale-110 active:scale-95 focus:outline-none"
            >
              <span
                className={cn(
                  "transition-colors",
                  v <= activeRating ? "text-amber-500" : "text-border",
                )}
              >
                ★
              </span>
            </button>
          ))}
          <span className="ml-2 text-sm font-medium text-muted-foreground">
            {RATING_LABELS[activeRating]}
          </span>
        </div>
      </div>

      {/* Comment */}
      <div className="space-y-2">
        <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Your review
        </p>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this tutor…"
          className="min-h-[96px] resize-none bg-muted/40 border-border/40 focus:border-border text-sm"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={reviewMutation.isPending}
        className={cn(
          "w-full flex items-center justify-center gap-2",
          "py-3 rounded-xl text-[14px] font-medium",
          "transition-all duration-150 active:scale-[0.98]",
          reviewMutation.isPending
            ? "bg-black text-white opacity-60 cursor-not-allowed"
            : "bg-black text-white hover:opacity-85",
        )}
      >
        {reviewMutation.isPending ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Submitting…
          </>
        ) : (
          <>
            <Send size={16} /> Submit review
          </>
        )}
      </button>
    </div>
  );
}
