import { TitleSectionBlue } from "../../assets/styles/texts";
import { CarouselBox } from "../../components/CarouselBox";
import { Button } from "../../components/Header/styles";
import { TitleSection } from "../../components/TitleSection";
import { Section } from "./styles";

interface HowWorkSlides {
  title: string,
  description: string,
}

export function HowWorks() {
  const slides:HowWorkSlides[] = [
    {
      title: 'O Embarcador',
      description: 'Publica através do MOL uma convocação do frete contendo os dados e o valor do frete a ser pago.',
    },
    {
      title: 'O Motorista',
      description: 'Recebe uma notificação no celular através do aplicativo MOL e decide se deseja ou não pegar este serviço.',
    },
    {
      title: 'O Motorista',
      description: 'Se dirige até o local de embarque da carga e faz a leitura do QR code o responsável pelo embarque do aplicativo MOL.',
    },
    {
      title: 'O Motorista',
      description: 'Faz a leitura da chave da NF da mercadoria e o MOL automaticamente emite o CTe e o MDFe.',
    },
    {
      title: 'O Motorista',
      description: 'A partir deste momento o motorista está autorizado a iniciar a viagem e já pode contar com 30% do valor do frete para início da viagem.',
    },
    {
      title: 'O Motorista',
      description: 'Chegando ao destino final, finaliza a entrega fazendo a leitura do QR code com a pessoa responsável pelo recebimento da carga.',
    },
    {
      title: 'O Recebedor',
      description: 'Após avaliar a entrega da carga e não havendo nenhuma intercorrência, é liberado para o motorista o pagamento e o MOL já realiza a transferência do saldo.',
    },
  ];

  return (
    <>
      <Section className='how-works'>
        <TitleSectionBlue>Como funciona</TitleSectionBlue>
        <div className="box">
          <CarouselBox slides={slides} />
        </div>
      </Section>
    </>
  )
}