import { Link } from "react-router-dom";
import { getPath } from "../routes";
import DetailedHero from "../components/DetailedHero";

const heroTitle: string =
   "And we wept that one so lovely should have a life so brief";
const heroDescription: string =
   "More than 26,000 babies are stillborn in the United States every year. The Angel Names Association is a nonprofit organization that aims to ease the financial burden imposed by stillbirth, provide supportive programs and services for families enduring the trauma of stillbirth, and raise money for stillbirth research. We are here to remind bereaved parents that they are never alone on their journeys to honor and grieve their children.";

function HomePage() {
   return (
      <>
         <DetailedHero title={heroTitle} description={heroDescription} />
      </>
   );
}

export default HomePage;
