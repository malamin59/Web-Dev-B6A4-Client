import Tutors from "./Tutors";

interface TutorsPageProps {
  searchParams: Promise<{
    search?: string;
    rate?: string;
  }>;
}

export default async function Page({
  searchParams,
}: TutorsPageProps) {
  const { search = "", rate = "" } = await searchParams;

  return (
    <Tutors
      search={search}
      rate={rate}
      showSearch={true}
    />
  );
}