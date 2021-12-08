import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const Container = styled.main`
  width: 100%;
  height: 48rem;
  background: linear-gradient(90deg, rgba(16, 40, 80, 0) 10%, rgba(16, 40, 80, 0) 20%, rgba(16, 40, 80, 1) 75.24%, rgba(16, 40, 80, 1) 80.24%), url('images/driver-showing-bg.jpg'), ${colors.primaryBlue};
  background-size: contain;
  margin: 0;
  padding: 0.6rem 10%;

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
  height: 85%;
  background-color: ${colors.primaryBlue};
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 5.5rem;

  img {
    width: 14rem;
  }

  p {
    margin: 1.5rem 0;
    width: 14rem;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 0.914rem;
    text-align: center;
    color: ${colors.primaryWhite};
  }
`;