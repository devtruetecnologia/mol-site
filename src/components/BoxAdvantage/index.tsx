import { DescriptionBox, TitleTextYellow } from '../../assets/styles/texts';
import { Bg, BoxAdvantageS, Container } from './styles';

interface BoxAdvantageProps {
  boxProps: {
    title: string,
    description: string,
    image: string,
    mockup: boolean,
    direction: 'right' | 'left',
  },
}

export function BoxAdvantage({ boxProps }:BoxAdvantageProps) {
    return(
      <Container>
        <BoxAdvantageS mockup={boxProps.mockup} image={boxProps.image} direction={boxProps.direction}>
          <div className="text-box">
            <TitleTextYellow bottom>{boxProps.title}</TitleTextYellow>
            <DescriptionBox>{boxProps.description}</DescriptionBox>
          </div>
          {boxProps.mockup ? <img className="mockup" src={boxProps.image} alt="" /> : null}
        </BoxAdvantageS>
        <Bg></Bg>
      </Container>
    );
}