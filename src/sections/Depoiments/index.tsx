import { DepoimentCarousel } from "../../components/DepoimentCarousel";
import { Section } from "./styles";

interface DepoimentSlides {
  name: string,
  title: string,
  depoiment: string,
}

export function Depoiments() {
  const slides:DepoimentSlides[] = [
    {
      name: 'Carlos Augusto',
      title: 'Caminhoneiro',
      depoiment: 'Depois que conheci o MOL, todas as emissões e pagamentos de Conhecimento de Transporte eu passei a fazer pelo aplicativo. Facilitou o meu trabalho como motorista e de meu clientes. Muito mais rápido.',
    },
    {
      name: 'Carlos Augusto',
      title: 'Caminhoneiro',
      depoiment: 'Depois que conheci o MOL, todas as emissões e pagamentos de Conhecimento de Transporte eu passei a fazer pelo aplicativo. Facilitou o meu trabalho como motorista e de meu clientes. Muito mais rápido.',
    },
    {
      name: 'Carlos Augusto',
      title: 'Caminhoneiro',
      depoiment: 'Depois que conheci o MOL, todas as emissões e pagamentos de Conhecimento de Transporte eu passei a fazer pelo aplicativo. Facilitou o meu trabalho como motorista e de meu clientes. Muito mais rápido.',
    },
  ];

  return (
    <>
      <Section className='depoiments'>
        <DepoimentCarousel slides={slides} />
      </Section>
    </>
  )
}