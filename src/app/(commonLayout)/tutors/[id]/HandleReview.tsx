"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/app/service/axios";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export default function HandleReview({
  reviewerId,
  reviewedUserId,
}: {
  reviewerId: string;
  reviewedUserId: string;
}) {
  const [rating, setRating] = useState("5");
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
      setRating("5");

      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });
      toast.success("review add successfully")
    },
    

    onError: () => {
      toast.error("Failed to submit review");
    },
  });

  const handleSubmit = () => {
    reviewMutation.mutate({
      rating: Number(rating),
      comment,
      reviewerId,
      reviewedUserId,
    });
  };

  return (
    <div className="space-y-4 border p-5 rounded-xl bg-white">

      {/* Rating */}
      <Select value={rating} onValueChange={setRating}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select rating" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
          <SelectItem value="4">⭐⭐⭐⭐ Good</SelectItem>
          <SelectItem value="3">⭐⭐⭐ Average</SelectItem>
          <SelectItem value="2">⭐⭐ Poor</SelectItem>
          <SelectItem value="1">⭐ Very Bad</SelectItem>
        </SelectContent>
      </Select>

      {/* Comment */}
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review..."
      />

      {/* Button */}
      <Button
        onClick={handleSubmit}
        className="w-full"
        disabled={reviewMutation.isPending}
      >
        {reviewMutation.isPending ? "Submitting..." : "Submit Review"}
      </Button>

    </div>
  );
}   