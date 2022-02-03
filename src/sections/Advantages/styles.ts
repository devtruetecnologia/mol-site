import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 150rem;
  background: url('lines/lines-advantages.svg'), linear-gradient(201.62deg, #122D58 0.66%, #0A1D3C 81.6%);
  background-size: cover;
  margin: 0;
  padding: 4.688rem 10% 7.5rem 10%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .carousel {
    display: none;
  }

  .boxs {
    height: 130rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    padding: 4.688rem 8% 7.5rem 8%;
  }

  @media (max-width: 375px) {
    justify-content: center;
    align-items: center;
    padding: 4.688rem 0 10rem 0;
    min-height: 90rem;

    h2.title {
      margin-left: 0;
      margin-bottom: 2rem;
    }

    .boxs {
      display: none;
    }

    .carousel {
      display: flex;
    }
  }
`;