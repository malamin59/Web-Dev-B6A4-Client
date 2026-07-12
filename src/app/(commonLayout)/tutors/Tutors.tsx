import EmptyPage from "@/app/(dashboardLayout)/EmptyPage";
import axiosInstance from "@/app/service/axios";
import Card from "./Card";
import TutorHeader from "./TutorHeader";
import SearchBar from "./SearchBar";

 async function getTutors(search = "", rate = "") {
  const res = await axiosInstance.get("/tutor", {
    params: { search, rate },
  });

  return res.data.data;
}

interface TutorsProps {
  search?: string;
  rate?: string;
  showSearch?: boolean;
}

export default async function Tutors({
  search = "",
  rate = "",
  showSearch = true,
}: TutorsProps) {
  const tutors = await getTutors(search, rate);

  if (tutors.length === 0) {
    return <EmptyPage />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 mb-4">
      <TutorHeader />

      {showSearch && <SearchBar />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tutors.map((tutor: any) => (
          <Card key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
}