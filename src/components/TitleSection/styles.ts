import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface TitleSectionDivProps {
  direction?: 'right' | 'center' | 'left';
}

export const TitleSectionDiv = styled.div<TitleSectionDivProps>`
    height: 4.5rem;
    margin-bottom: 3.5rem;
    margin-left: 6.5rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    position: relative;

    img {
      display: ${props => props.direction != null ? 'initial' : 'none'};
      left: ${props => props.direction != null ? (props.direction == 'left' ? '-1.8rem' : (props.direction == 'center' ? '4.3rem' : 'none')) : 'none'};
      right: ${props => props.direction != null ? (props.direction == 'right' ? '-1.8rem' : 'none') : 'none'};
      width: 4.4rem;
      position: absolute;
      z-index: -1;
    }
`;