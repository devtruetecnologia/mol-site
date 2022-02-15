import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const InputFieldS = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 0.5rem;

  label {
    font-weight: 700;
    font-size: 0.688rem;
    line-height: 0.838rem;
    color: ${colors.primaryWhite};

    margin-bottom: 0.3rem;
  }

  p {
    height: 1rem;
    margin: 0;
    margin-top: 0.2rem;
    text-align: start;
    font-size: 0.6rem;
  }

  .input {
    &:focus {
      background-color: #fff;
    }
  }

  @media (max-width: 768px) {
    label {
      font-size: 0.9rem;
      margin-bottom: 0.7rem;
    }

    .input {
      font-size: 0.9rem;
      height: 3rem;
      border-radius: 0.3rem;
      padding: 0.7rem 0.7rem;
    }

    .input-right-element {
      width: 4rem;
      height: 100%;

      .button-password {
        width: 3.5rem;
        height: 80%;
        margin: 0 !important;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 425px) {
    label {
      font-size: 1.3rem;
      margin-bottom: 0.7rem;
    }

    .input {
      font-size: 1.3rem;
      height: 4.5rem;
      border-radius: 0.5rem;
      padding: 1rem 1rem;
    }

    .input-right-element {
      width: 6rem;
      height: 100%;

      .button-password {
        width: 5rem;
        height: 80%;
        margin: 0 !important;

        svg {
          width: 2.3rem;
          height: 2.3rem;
        }
      }
    }
  }
`;
