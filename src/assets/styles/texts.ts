import styled from "styled-components";
import { colors } from "./global";

export const TitleBanner = styled.h1`
  font-weight: 800;
  font-size: 2.4rem;
  color: ${colors.primaryWhite};
  /* line-height: 2.5rem; */
`

export const TitleSectionBlue = styled.h2`
  font-weight: 800;
  font-size: 1.875rem;
  color: ${colors.primaryBlue};
  text-transform: uppercase;
`

export const TitleSectionWhite = styled.h2`
  font-weight: 800;
  font-size: 1.875rem;
  color: ${colors.primaryWhite};
  text-transform: uppercase;
  margin-bottom: -8rem;
  margin-left: 5rem;
`

export const TitleTextBlue = styled.h2`
  font-weight: 800;
  font-size: 1.875rem;
  color: ${colors.primaryBlue};
  margin-bottom: 2.438rem;
`



interface TitleTextYellowProps {
  bottom?: boolean,
}

export const TitleTextYellow = styled.h2<TitleTextYellowProps>`
  font-weight: 800;
  font-size: 1.875rem;
  color: ${colors.primaryYellow};
  margin-bottom: ${props => props.bottom != null ? '2rem' : '0'};
`

export const TitleTextWhite = styled.h2`
  font-weight: 800;
  font-size: 1.875rem;
  color: ${colors.primaryWhite};
`

export const TitleCarousel = styled.h3`
  font-weight: 800;
  font-size: 1.125rem;
  color: ${colors.primaryWhite};
`

export const DescriptionCarousel = styled.p`
  font-size: 0.875rem;
  color: ${colors.primaryWhite};
`

export const TitleDepoiment = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${colors.primaryWhite};
  line-height: 1.688rem;
  margin-bottom: 0.8rem;
`

export const DescriptionDepoiment = styled.p`
  font-size: 1.125rem;
  color: ${colors.primaryGrey};
  font-style: italic;
  line-height: 1.688rem;
`

export const DescriptionBox = styled.p`
  color: ${colors.primaryGrey};
  line-height: 1.688rem;
`

export const TextFooterTop = styled.p`
  font-size: 1.125rem;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  color: ${colors.primaryBlue};
`

export const TextFooterBottom = styled.p`
  font-size: 0.813rem;
  font-weight: 500;
  color: ${colors.primaryBlue};
`
