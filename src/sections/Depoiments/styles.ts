import styled from "styled-components";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  height: 38.85rem;
  background: url('lines/lines-depoiments.svg'), linear-gradient(201.62deg, #122D58 0.66%, #0A1D3C 81.6%);
  background-size: contain;
  background-position-x: -0.1rem;
  background-repeat: no-repeat;
  margin: 0;
  padding: 6.25rem 15%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
`;