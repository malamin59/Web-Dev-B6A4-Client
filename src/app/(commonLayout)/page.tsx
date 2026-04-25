import { AccordionPage } from "../components/home/Accordion/AccordionPage";
import Banner from "../components/home/Bennar/banner";
import Footer from "../components/home/Footer/footer";
import SkillsPage from "../components/home/SkillsCard/SkillsPage";

// await new Promise((resolve) => setTimeout(resolve, 4000));
export default  function Home() {
  
  return (
    <div>
      {" "}
      <Banner />{" "}
      <SkillsPage/>
      <AccordionPage/>
      <Footer/>
    </div>
  );
}
