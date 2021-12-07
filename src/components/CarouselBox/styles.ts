import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface CarouselBoxProps {
  image: string,
}

export const CarouselBoxS = styled.div<CarouselBoxProps>`
    width: 51.25rem;
    height: 27.063rem;
    background: url(${props => props.image}), ${colors.primaryBlueTransp};
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 9999;

    .text-box {
      padding: 2.438rem 0;
      height: 100%;
      z-index: 9999;
    }

    img.mockup {
      margin-top: -9.125rem;
      margin-bottom: -9.313rem;
      z-index: 2;
    }
`;

export const Bg = styled.div`
    background-color: ${colors.primaryBlue};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    mix-blend-mode: overlay;
`

interface ControllerButtonProps {
  enabled: boolean,
}

export const ControllerButton = styled.button<ControllerButtonProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    background-color: transparent;
    border: solid 0.05rem ${colors.colorBorderBase};
    border-radius: 0.188rem;
    cursor: ${props => props.enabled ? 'pointer' : 'initial'};
    width: 2.875rem;
    height: 2.875rem;
    z-index: 1;
`

interface PaginationButtonProps {
  selected: boolean,
}

export const PaginationButton = styled.button<PaginationButtonProps>`
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 0.188rem;
  cursor: pointer;
  border: ${props => props.selected ? `solid 0.05rem ${colors.primaryYellow}` : `solid 0.05rem ${colors.primaryGrey}`};
  background-color: ${props => props.selected ? colors.primaryYellow : `transparent`};

  & + & {
    margin-left: 0.3rem;
  }
`