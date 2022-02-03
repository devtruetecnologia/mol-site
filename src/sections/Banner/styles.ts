import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 32rem;
  background: linear-gradient(269.73deg, ${colors.primaryBlue} 39%, rgba(18, 45, 88, 0) 99.78%), url('images/truck-driver-bg.jpg'), ${colors.primaryBlue};
  background-size: cover;
  margin: 0;
  padding: 0.6rem 10%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;

  .box {
    width: 30%;
  }

  @media (max-width: 768px) {
    .box {
      width: 50%;
    }
  }

  @media (max-width: 375px) {
    min-height: 60rem;
    background: linear-gradient(1.36deg, #122D58 20.08%, rgba(18, 45, 88, 0) 95.52%), url('images/truck-driver-bg.jpg'), ${colors.primaryBlue};
    justify-content: flex-end;
    align-items: center;
    padding: 4rem 7%;

    .box {
      text-align: center;
      width: 100%;
    }
  }
`;