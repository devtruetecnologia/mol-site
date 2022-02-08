import { TitleBanner, TitleSectionWhite } from "../../assets/styles/texts";
import { AdvantagesCarousel } from "../../components/AdvantagesCarousel";
import { BoxAdvantage } from "../../components/BoxAdvantage";
import { CountPagination } from "../../components/CountPagination";
import { TitleSection } from "../../components/TitleSection";
import { Section } from "./styles";

interface BoxAdvantageProps {
  title: string,
  description: string,
  image: string,
  mockup: boolean,
  direction: 'right' | 'left',
}

export function Advantages() {
  const boxs:BoxAdvantageProps[] = [
    {
      title: 'Emissão de CTe',
      description: 'Realize a emissão e pagamento de Ct-e direto do nosso aplicativo, e tenha tudo em mãos de forma organizada. Os pagamentos podem ser feitos visa boleto, cartão ou pix.',
      direction: 'left',
      image: 'images/mockup-cte.png',
      mockup: true,
    },
    {
      title: 'Convocações',
      description: 'Receba pedidos de transporte de carga através do aplicativo. De uma forma rápida, você já pode ter detalhes da carga e rota antes de decidir se você deseja realizar o trabalho.',
      direction: 'right',
      image: 'images/mockup-convocations.png',
      mockup: true,
    },
    {
      title: 'Giro frete',
      description: 'Giro frete é uma forma que o MOL encontrou de facilitar o trabalho do caminhoneiro disponibilizando até 30% do valor do frete no início da viagem para que ele possa seguir o trajeto já com o dinheiro para pagar as despesas iníciais.',
      direction: 'left',
      image: 'images/driver-using.jpg',
      mockup: false,
    },
    {
      title: 'Frete seguro',
      description: 'Frete seguro é uma modalidade de pagamento oferecida pelo MOL que garante ao motorista receber o pagamento após a confirmação de entrega da sua carga.',
      direction: 'right',
      image: 'images/driver-showing.jpg',
      mockup: false,
    },
  ]

  return (
    <>
      <Section className='advantages'>
        <TitleSectionWhite className="title">Vantagens do MOL</TitleSectionWhite>
        <div className="boxs">
          {boxs.map(box => <BoxAdvantage key={box.image} boxProps={box} />)}
        </div>
        <div className="carousel">
          <AdvantagesCarousel slides={boxs} />
        </div>
      </Section>
    </>
  )
}