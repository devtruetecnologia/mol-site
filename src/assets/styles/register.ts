import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface RegisterProps {
  typeRegister: string | string[],
}

export const Container = styled.main<RegisterProps>`
  width: 100%;
  min-height: 54rem;
  background: ${props => `linear-gradient(90deg, rgba(16, 40, 80, 0) 10%, rgba(16, 40, 80, 0) 20%, rgba(16, 40, 80, 1) 75.24%, rgba(16, 40, 80, 1) 80.24%), url('images/register-page/${props.typeRegister}.jpg'), rgba(16, 40, 80, 1) 80.24%`};
  background-size: ${props => props.typeRegister === 'PROVIDER' ? 'contain' : '70%'};
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
    padding: 25rem 4% 8rem 4%;
    background: ${props => `linear-gradient(180deg, rgba(16, 40, 80, 0) 10%, rgba(16, 40, 80, 0) 20%, rgba(16, 40, 80, 1) 75.24%, rgba(16, 40, 80, 1) 80.24%), url('images/register-page/${props.typeRegister}.jpg'), rgba(16, 40, 80, 1) 80.24%`};
  }

  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 25rem 4% 8rem 4%;
    background: ${props => `linear-gradient(180deg, rgba(16, 40, 80, 0) 10%, rgba(16, 40, 80, 0) 20%, rgba(16, 40, 80, 1) 75.24%, rgba(16, 40, 80, 1) 80.24%), url('images/register-page/${props.typeRegister}.jpg'), rgba(16, 40, 80, 1) 80.24%`};
    background-size: ${props => props.typeRegister === 'PROVIDER' ? '170%' : '70%'};
  }
`;

export const BoxText = styled.div`
  width: 30rem;
  min-height: 85%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h2 {
    color: ${colors.primaryWhite};
    font-size: 4rem;
    line-height: 4.5rem;
    text-align: left;
    font-weight: 700;
    margin-bottom: 1rem;

    text-shadow: 0.25rem 0.375rem 0.25rem rgba(0, 0, 0, 0.7);
  }

  h4 {
    color: ${colors.primaryWhite};
    font-size: 1.625rem;
    line-height: 2.25rem;
    text-align: left;
    font-weight: 600;
    margin-bottom: 2rem;

    text-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.8);
  }

  p {
    margin: 1.5rem 0;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
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
    h4 {
      margin-bottom: 0;
    }
  }

  @media (max-width: 375px) {
    h4 {
      margin-bottom: 0;
    }

    p {
      margin: 1.5rem 0 2rem 0;
      font-size: 1.4rem;
    }
  }
`;

export const BoxForm = styled.div`
  width: 30rem;
  min-height: 85%;
  background-color: ${colors.primaryBlue};
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 4.5rem;

  img {
    width: 13rem;
  }

  h3 {
    color: ${colors.primaryWhite};
    font-size: 1rem;
    line-height: 0.914rem;
    text-align: center;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  p {
    margin: 1.5rem 0;
    width: 14rem;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 0.914rem;
    text-align: center;
    color: ${colors.primaryWhite};
  }

  form {
    width: 100%;

    p {
      width: 100%;

      strong {
        color: ${colors.primaryYellow};
        cursor: pointer;

        transition: 400ms;

        &:hover {
          color: ${colors.primaryYellowTransp};
        }
      }
    }
  }

  .checkbox-group {
    margin: 0.5rem 0 1.5rem 0;

    .error {
      margin: 0;
      font-size: .75rem;
    }
  }

  .checkbox-terms {
    p {
      margin: 0.6rem 0;
      font-family: 'Montserrat', sans-serif;
      color: ${colors.primaryWhite};
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 0.914rem;
      text-align: start;

      strong {
        color: ${colors.primaryYellow};
        font-weight: 600;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    form {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .fields {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
      }

      .checkbox-group {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }

      button {
        width: 30%;
        margin: 0 35%;
      }
    }
  }

  @media (max-width: 375px) {
    background-color: transparent;
    padding: 3rem 0;

    p {
      font-size: 1.2rem;
    }
    
    h3 {
      font-size: 1.3rem;
    }

    form {
      .fields {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      .checkbox-terms {
        p {
          font-size: 1.2rem;
        }

        .chakra-checkbox__control {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;

interface ButtonProps {
  outlined?: boolean;
  extended?: boolean;
}

export const ButtonModal = styled.button<ButtonProps>`
  color: ${props => props.outlined ? colors.primaryWhite : colors.primaryWhite};
  background-color: ${props => props.outlined ? 'rgba(0, 0, 0, 0)' : colors.primaryBlue};
  font-size: 0.75rem;
  font-weight: 800;
  font-family: Montserrat;
  width: ${props => props.extended ? '100%' : 'initial'};
  border: solid 0.09rem ${colors.primaryYellow};
  padding: .45rem .8rem;
  border-radius: .2rem;
  transition: 400ms;

  cursor: pointer;

  & + & {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: ${colors.primaryGrey};
    color: ${colors.primaryBlue};
    border: solid 0.09rem ${colors.primaryGrey};

    transition: 600ms;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 375px) {
    font-size: 1.4rem;

    &.register {
      margin-right: -10rem;
    }

    &.access {
      display: none;
    }
  }
`;