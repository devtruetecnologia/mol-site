import { useRouter } from "next/router";
import { TitleSection } from "../../components/TitleSection";
import { BoxRegister, Description, Section, Title } from "./styles";

export function Register() {
  const router = useRouter();

  function goToRegister(type: string) {
    router.push({ pathname: '/register', query: { type: type } })
  }

  return (
    <>
      <Section className='register'>
        <TitleSection title="Cadastro" direction='right' />
        <div className="boxes">
          <BoxRegister onClick={() => {goToRegister('PROVIDER')}} index={0} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', default: { duration: 0.5 } }}>
            <Title>Embarcador</Title>
            <Description>Clique para se cadastrar</Description>
          </BoxRegister>
          <BoxRegister onClick={() => {goToRegister('AGENT')}} index={1} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', default: { duration: 0.5 } }}>
            <Title>Agente</Title>
            <Description>Clique para se cadastrar</Description>
          </BoxRegister>
          <BoxRegister onClick={() => {goToRegister('COMMERCIAL')}} index={2} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', default: { duration: 0.5 } }}>
            <Title>Comercial</Title>
            <Description>Clique para se cadastrar</Description>
          </BoxRegister>
        </div>
      </Section>
    </>
  )
}