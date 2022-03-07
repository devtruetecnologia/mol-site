import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface RegisterProps {
  typeRegister: string | string[];
}

export const Container = styled.main<RegisterProps>`
  width: 100%;
  min-height: 54rem;
  background: ${(props) =>
    `linear-gradient(90deg, rgba(16, 40, 80, 0) 10%, rgba(16, 40, 80, 0) 20%, rgba(16, 40, 80, 1) 75.24%, rgba(16, 40, 80, 1) 80.24%), url('images/register-page/${props.typeRegister}.jpg'), rgba(16, 40, 80, 1) 80.24%`};
  background-size: ${(props) =>
    props.typeRegister === "PROVIDER" ? "contain" : "70vw"};
  background-position-y: 10%;
  background-repeat: no-repeat;
  margin: 0;
  padding: 4rem 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  overflow-x: hidden;

  .box {
    width: 30%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 6rem 4% 8rem 4%;
    background: ${(props) =>
      `linear-gradient(180deg, rgba(16, 40, 80, 0) 10%, rgba(16, 40, 80, 0) 20%, rgba(16, 40, 80, 1) 75.24%, rgba(16, 40, 80, 1) 80.24%), url('images/register-page/${props.typeRegister}.jpg'), rgba(16, 40, 80, 1) 80.24%`};
    background-size: ${(props) =>
      props.typeRegister === "PROVIDER" ? "140vw" : "100vw"};
    background-repeat: no-repeat;
  }

  /* @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 25rem 4% 8rem 4%;
    background: ${(props) =>
      `linear-gradient(180deg, rgba(16, 40, 80, 0) 10%, rgba(16, 40, 80, 0) 20%, rgba(16, 40, 80, 1) 45.24%, rgba(16, 40, 80, 1) 80.24%), url('images/register-page/${props.typeRegister}.jpg'), rgba(16, 40, 80, 1) 80.24%`};
    background-size: ${(props) =>
      props.typeRegister === "PROVIDER" ? "170vw" : "100vw"};
    background-repeat: no-repeat;
    background-position-y: 10vw;
  } */
`;

export const BoxText = styled.div`
  width: 100%;
  min-height: 85%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h2 {
    color: ${colors.primaryWhite};
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: left;
    font-weight: 700;
    margin-bottom: 1rem;

    text-shadow: 0.25rem 0.375rem 0.25rem rgba(0, 0, 0, 0.7);
  }

  

  p {
    margin: 1.5rem 0;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: justify;
    color: ${colors.primaryWhite};

    text-shadow: 0.063rem 0.063rem 0.063rem rgba(0, 0, 0, 0.8);

    strong {
      color: ${colors.primaryYellow};
      cursor: pointer;

      transition: 400ms;

      &:hover {
        color: ${colors.primaryYellowTransp};
      }
    }
  }

  @media (max-width: 768px) {
    
  }

  @media (max-width: 425px) {
    p {
      margin: 1.5rem 0 2rem 0;
      font-size: 1.4rem;
    }
  }
`;
