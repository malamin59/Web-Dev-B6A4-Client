import { AccordionPage } from "../components/home/Accordion/AccordionPage";
import Banner from "../components/home/Bennar/banner";
import Footer from "../components/home/Footer/footer";
import Review from "../components/home/Review/Review";
import SkillsPage from "../components/home/SkillsCard/SkillsPage";
import axiosInstance from "../service/axios";

async function getTutors() {
  const res = await axiosInstance.get("/tutor");
  return res.data.data;
}

export default async function Home() {
  const tutors = await getTutors();

  return (
    <div>
      <Banner totalTutor={tutors.length} />

      <SkillsPage />

      <AccordionPage />

      <Review />

      <Footer />
    </div>
  );
}