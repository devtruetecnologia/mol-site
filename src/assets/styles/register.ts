import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const Container = styled.main`
  width: 100%;
  min-height: 54rem;
  background: linear-gradient(90deg, rgba(16, 40, 80, 0) 10%, rgba(16, 40, 80, 0) 20%, rgba(16, 40, 80, 1) 75.24%, rgba(16, 40, 80, 1) 80.24%), url('images/driver-showing-bg.jpg'), ${colors.primaryBlue};
  background-size: contain;
  margin: 0;
  padding: 4rem 10%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  .box {
    width: 30%;
  }
`;

export const BoxForm = styled.div`
  width: 27rem;
  min-height: 85%;
  background-color: ${colors.primaryBlue};
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 5.5rem;

  img {
    width: 13rem;
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
`;