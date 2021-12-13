import { useRouter } from "next/router";
import { Button } from "../../components/Header/styles";
import { TitleSection } from "../../components/TitleSection";
import { Section } from "./styles";

export function ComercialAgent() {
  const router = useRouter();
  
  function goToRegister() {
    router.push({ pathname: '/register', query: { type: 'PJ' } })
  }

  return (
    <>
      <Section className='agent'>
        <TitleSection title="Seja um agente comercial" direction="right" />
        <div className="box">
          <p>Ajude a transformar a logistica de transporte junto com o MOL, tenha uma plataforma exclusiva que vai te permitir acompanhar seu faturamento sobre os transportes de carga realizados pelos embarcadores que você associar a sua carteira.</p>
          <Button onClick={goToRegister}>
            Cadastre-se agora
          </Button>
        </div>        
        <img className="bg" src="images/sales-man.png" alt="" />
      </Section>
    </>
  )
}