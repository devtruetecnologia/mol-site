import { TitleSectionBlue, TitleTextBlue } from "../../assets/styles/texts";
import { CountPagination } from "../../components/CountPagination";
import { TitleSection } from "../../components/TitleSection";
import { Section } from "./styles";

export function Aplicativo() {
  return (
    <>
      <Section className='app'>
        <TitleSection title="Aplicativo" direction='center' />
        <div className="box">
          <TitleTextBlue>Baixe nosso App</TitleTextBlue>
          <p>Nosso App vai conectar você motorista com os embarcadores, para que você possa transportar as melhores cargas.</p>
          <div className="platforms">
            <img src="images/google-play.png" alt="Google Play" />
            <img src="images/app-store.png" alt="App Store" />
          </div>
        </div>
      </Section>
    </>
  )
}