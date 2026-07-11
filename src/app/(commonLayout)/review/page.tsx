"use client";

import axiosInstance from "@/app/service/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUserRole } from "@/hooks/userRole";
import toast from "react-hot-toast";

export default function ReviewPage() {
  const { user } = useUserRole();

  const handleReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form  = e.currentTarget

    if (!user) {
      toast.error("Please log in to share your experience.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title")?.toString().trim();
    const description = formData.get("description")?.toString().trim();

    if (!title || !description) {
      toast.error("All fields are required.");
      return;
    }

    if (description.length > 150) {
      toast.error("Description must not exceed 150 characters.");
      return;
    }

    const review = {
      userId: user.id,
      title,
      description,
    };
       try {
      console.log(review);
      const result = await axiosInstance.post("/userReview", review);

      if (result.data.success) {
        toast.success("Thank you for sharing your experience!");
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="max-w-2xl mx-auto px-4 lg:py-10 py-5">
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <div className="mb-6">
          <h1 className="lg:text-3xl text-2xl font-bold text-center">
            Share Your Experience
          </h1>
          <p className="text-sm text-center text-muted-foreground mt-2">
            we d love to hear your feedback about SkillBridge.
          </p>
        </div>

        <form onSubmit={handleReview} className="space-y-5">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Review Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="e.g. Excellent learning platform"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Your Experience</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Tell others about your experience with SkillBridge..."
              rows={4}
              maxLength={200}
            />
            <p className="text-xs text-muted-foreground">
              Maximum 200 characters.
            </p>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full">
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
}
