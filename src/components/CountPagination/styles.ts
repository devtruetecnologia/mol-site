import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface SquarePaginationProps {
  enabled: boolean,
}

export const SquarePagination = styled.div<SquarePaginationProps>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.125rem;
  border: ${props => props.enabled ? `solid 0.05rem ${colors.primaryYellow}` : `solid 0.05rem ${colors.primaryGrey}`};
  background-color: ${props => props.enabled ? colors.primaryYellow : `transparent`};
`