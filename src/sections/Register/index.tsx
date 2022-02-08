import { useRouter } from "next/router";
import { CarouselRegister } from "../../components/CarouselRegister";
import { TitleSection } from "../../components/TitleSection";
import { BoxRegister, Description, Section, Title } from "./styles";

export function Register() {
  const router = useRouter();

  function goToRegister(type: string) {
    router.push({ pathname: '/register', query: { type: type } })
  }

  const slides = [
    {
      title: 'Embarcador',
      goTo: () => goToRegister('PROVIDER')
    },
    {
      title: 'Agente',
      goTo: () => goToRegister('AGENT')
    },
    {
      title: 'Comercial',
      goTo: () => goToRegister('COMMERCIAL')
    },
  ]

  return (
    <>
      <Section className='register'>
        <TitleSection title="Cadastro" direction='none' />
        <div className="boxes">
          <BoxRegister onClick={() => {goToRegister('PROVIDER')}} index={0} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', duration: 0.5 }}>
            <Title>Embarcador</Title>
            <Description>Cadastre-se</Description>
          </BoxRegister>
          <BoxRegister onClick={() => {goToRegister('AGENT')}} index={1} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', duration: 0.5 }}>
            <Title>Agente</Title>
            <Description>Cadastre-se</Description>
          </BoxRegister>
          <BoxRegister onClick={() => {goToRegister('COMMERCIAL')}} index={2} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', duration: 0.5 }}>
            <Title>Comercial</Title>
            <Description>Cadastre-se</Description>
          </BoxRegister>
        </div>
        <div className="carousel">
          <CarouselRegister slides={slides} />
        </div>
      </Section>
    </>
  )
}