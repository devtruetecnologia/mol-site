import { useState } from "react";
import ReactPlayer from "react-player";
import { TitleSectionBlue, TitleTextBlue } from "../../assets/styles/texts";
import { CountPagination } from "../../components/CountPagination";
import { TitleSection } from "../../components/TitleSection";
import { Section, ThumbVideo } from "./styles";

export function MeetMol() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Section className='meet-mol'>
        <TitleSection title="Conheça o MOL" direction='left' />
        <div className="box-section">
          <div className="box-video">
            <ThumbVideo playing={isPlaying} onClick={() => {setIsPlaying(true)}}></ThumbVideo>
            <ReactPlayer playing={isPlaying} url="https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4" width='100%' height='100%' controls pip />
          </div>
          <div className="box">
            <TitleTextBlue>Solucionamos suas demandas logísticas de maneira simples.</TitleTextBlue>
            <p>Somos uma plataforma dígital que visa melhorar a logística de transportes no Brasil, de forma intuitiva facilitando os processos burocráticos para embarcadores e caminhoneiros.</p>
          </div>
        </div>
      </Section>
    </>
  )
}