import axiosInstance from "@/app/service/axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getTutors() {
  const res = await axiosInstance.get("/tutor");

  return res.data.data;
}

export default async function TutorsPage() {
  const tutors = await getTutors();

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Browse Tutors</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tutors.map((tutor: any) => (
          <div key={tutor.id} className="border rounded-xl p-5">
            <h2 className="text-xl font-semibold">{tutor.user.name}</h2>

            <p className="mt-2">{tutor.expertise}</p>

            <p className="mt-2 text-sm text-gray-500">{tutor.bio}</p>

            <p className="mt-4 font-medium ">${tutor.hourlyRate}/hour</p>
            <Link href={`/tutors/${tutor.id}`}>
              <Button className="mt-5 bg-green-600 text-white px-4 py-2 rounded-lg">
                View Details
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
