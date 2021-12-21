import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const InputFieldS = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 0.7rem;

  label {
    font-weight: 700;
    font-size: 0.688rem;
    line-height: 0.838rem;
    color: ${colors.primaryWhite};

    margin-bottom: 0.3rem;
  }

  p {
    margin: 0;
    margin-top: 0.2rem;
    text-align: start;
    font-size: 0.6rem;
  }

  .input {
    &:focus {
      background-color: #FFF;
    }
  }
`;