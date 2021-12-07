import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const Container = styled.main`
  width: 100%;
  height: 64rem;
  background: linear-gradient(90deg, rgba(16, 40, 80, 0) 10%, rgba(16, 40, 80, 1) 80.24%), url('images/driver-showing-bg.jpg'), ${colors.primaryBlue};
  background-size: cover;
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
  width: 31.25rem;
  height: 80%;
  background-color: ${colors.primaryBlue};
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 10rem;

  img {
    width: 11.5rem;
  }
`;