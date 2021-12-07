import { TitleBanner } from "../../assets/styles/texts";
import { CountPagination } from "../../components/CountPagination";
import { Section } from "./styles";

export function Banner() {
  return (
    <>
      <Section>
        <div className="box">
        <TitleBanner>Soluções práticas para motoristas e embarcadores</TitleBanner>
        </div>
        <CountPagination counts={[true, false, false]} enabledIndex={0} />
      </Section>
    </>
  )
}