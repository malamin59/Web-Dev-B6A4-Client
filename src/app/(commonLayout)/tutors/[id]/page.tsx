import axiosInstance from "@/app/service/axios";
import BookSessionButton from "@/app/service/BookSessionButton";

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
    <div className="max-w-4xl mx-auto py-10">
      <div className="border rounded-2xl p-8">
        <h1 className="text-4xl font-bold">{tutor.user.name}</h1>

        <p className="mt-4 text-gray-500">{tutor.bio}</p>

        <div className="mt-6 space-y-3">
          <p>
            <span className="font-semibold">Expertise:</span> {tutor.expertise}
          </p>

          <p>
            <span className="font-semibold">Hourly Rate:</span> $
            {tutor.hourlyRate}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Availability</h2>

          <div className="space-y-2">
            {tutor.availability.map((slot: any) => (
              <div key={slot.id} className="border rounded-lg p-3">
                <p>{slot.day}</p>

                <p>
                  {slot.startTime} - {slot.endTime}
                </p>
              </div>
            ))}
          </div>
        </div>
        <BookSessionButton tutorId={tutor.id} />
      </div>
    </div>
  );
}
