import { Advantages } from "../sections/Advantages";
import { Aplicativo } from "../sections/Aplicativo";
import { Banner } from "../sections/Banner";
import { ComercialAgent } from "../sections/ComercialAgent";
import { Depoiments } from "../sections/Depoiments";
import { HowWorks } from "../sections/HowWorks";
import { MeetMol } from "../sections/MeetMol";

export default function Home() {
  return (
    <>
      <Banner />
      <MeetMol />
      <Aplicativo />
      <HowWorks />
      <Advantages />
      <ComercialAgent />
      <Depoiments />
    </>
  )
}