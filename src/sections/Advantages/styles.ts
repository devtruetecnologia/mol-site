import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 149rem;
  background: url('lines/lines-advantages.svg'), linear-gradient(201.62deg, #122D58 0.66%, #0A1D3C 81.6%);
  background-size: cover;
  margin: 0;
  padding: 4.688rem 10% 7.5rem 10%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;