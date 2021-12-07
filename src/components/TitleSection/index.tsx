import { TitleSectionBlue, TitleSectionWhite } from '../../assets/styles/texts';
import { TitleSectionDiv } from './styles';

interface TitleSectionProps {
  title: string,
  direction?: 'right' | 'center' | 'left',
}

export function TitleSection({ title, direction }:TitleSectionProps) {
    return(
      <TitleSectionDiv direction={direction}>
        {direction != null ? <TitleSectionBlue>{title}</TitleSectionBlue> : <TitleSectionWhite>{title}</TitleSectionWhite>}
        <img src={direction != null && direction == 'center' ? "losang-vertical.svg" : "losang-horizontal.svg"} alt="" />
      </TitleSectionDiv>
    );
}