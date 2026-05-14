import axiosInstance from "@/app/service/axios";
import BookSessionButton from "@/app/service/BookSessionButton";
import ReviewSection from "./ReviewSection";
import TutorData from "./TutorData";
import TutorAvailability from "./TutorAvailability";

async function getTutor(id: string) {
  const res = await axiosInstance.get(`/tutor/${id}`);

  return res.data.data;
}
export default async function TutorDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const tutor = await getTutor(id);
  // console.log("Tutor data here -- >", tutor);

  return (
    // TutorDetailsPage.tsx  (layout only)
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div className="border border-border/40 rounded-2xl shadow-sm overflow-hidden">
        <TutorData tutor={tutor} />
        <TutorAvailability tutor={tutor} />
        <div className="p-6 md:p-8">
          <BookSessionButton tutorId={tutor.id} />
        </div>
        <div className="border-t border-border/30 px-6 md:px-8 py-6">
          <h2 className="text-xl font-medium mb-4">Reviews</h2>
          <ReviewSection reviewedUserId={tutor.user.id} />
        </div>
      </div>
    </div>
  );
}
