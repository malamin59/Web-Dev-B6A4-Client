import EmptyPage from "@/app/(dashboardLayout)/EmptyPage";
import axiosInstance from "@/app/service/axios";
import Card from "./Card";

async function getTutors() {
  const res = await axiosInstance.get("/tutor");
  return res.data.data;
}

export default async function TutorsPage() {
  const tutors = await getTutors();
  console.log(tutors);
  if (tutors.length === 0) {
    return <EmptyPage />;
  }

  return (
    <div className="max-w-7xl  mx-auto px-4 mb-4">
      <h1 className="text-2xl text-center text-blue-700 font-medium  mb-6">
        Browse tutors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tutors.map((tutor: any) => (
          <Card key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
}
