"use client";
import axiosInstance from "@/app/service/axios";
import { useUserRole } from "@/hooks/userRole";
import toast from "react-hot-toast";
import ReviewHead from "./ReviewHead";
import ReviewForm from "./ReviewForm";
export default function ReviewPage() {
  const { user } = useUserRole();
  const handleReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

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
        <ReviewHead />

        <form onSubmit={handleReview} className="space-y-5">
          <ReviewForm />
        </form>
      </div>
    </div>
  );
}
