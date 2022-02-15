import styled from "styled-components";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  height: 38.85rem;
  background: url("lines/lines-depoiments.svg"),
    linear-gradient(201.62deg, #122d58 0.66%, #0a1d3c 81.6%);
  background-size: contain;
  background-position-x: -0.1rem;
  background-repeat: no-repeat;
  margin: 0;
  padding: 6.25rem 15%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

  position: relative;

  @media (max-width: 768px) {
    background: url("lines/lines-depoiments-tablet.svg"),
      linear-gradient(201.62deg, #122d58 0.66%, #0a1d3c 81.6%);
    background-position-x: -0.1rem;
    background-size: 101%;

    padding: 2rem 3% 0 3%;
  }

  @media (max-width: 425px) {
    height: 56rem;

    background: url("lines/lines-depoiments-mobile.svg"),
      linear-gradient(201.62deg, #122d58 0.66%, #0a1d3c 81.6%);
    background-position-x: -0.1rem;
    background-size: 101%;

    padding: 2rem 0 0 0;
  }
`;
