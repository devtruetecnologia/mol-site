import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 32rem;
  background-image: url('images/mol-mockup-3d.png');
  background-position-x: 80%;
  background-position-y: 70%;
  background-size: 40%;
  background-repeat: no-repeat;
  background-color: ${colors.primaryGrey};
  margin: 0;
  padding: 3rem 10% 8rem 10%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  .box-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .box {
    width: 50%;
    min-height: 22rem;
    padding: 3rem 5.5rem 4rem 5.5rem;
    border: solid 0.05rem ${colors.colorBorderBase};

    .platforms {
      width: 100%;
      margin-top: 3.8rem;

      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      img {
        width: 42%;
      }
    }
  }
`;