import { motion } from "framer-motion";
import { Advantages } from "../sections/Advantages";
import { Aplicativo } from "../sections/Aplicativo";
import { Banner } from "../sections/Banner";
import { ComercialAgent } from "../sections/ComercialAgent";
import { Depoiments } from "../sections/Depoiments";
import { HowWorks } from "../sections/HowWorks";
import { MeetMol } from "../sections/MeetMol";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }
  
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <Banner />
      <MeetMol />
      <Aplicativo />
      <HowWorks />
      <Advantages />
      <ComercialAgent />
      <Depoiments />
    </motion.main>
  )
}