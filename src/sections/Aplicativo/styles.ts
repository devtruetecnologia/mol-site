import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 32rem;
  background-image: url("images/mol-mockup-3d.png");
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

  @media (max-width: 768px) {
    background-position-x: 93%;
    background-position-y: 70%;
    background-size: 67%;
    padding: 3rem 8% 8rem 8%;

    .box {
      padding: 1rem 1.2rem 1rem 1.2rem;

      .platforms {
        display: flex;
        flex-direction: column;
        margin-top: 1.3rem;

        img {
          width: 50%;
        }

        img + img {
          margin-top: 1rem;
        }
      }
    }
  }

  @media (max-width: 425px) {
    min-height: 87rem;
    padding: 5rem 5% 8rem 5%;

    align-items: center;
    justify-content: flex-start;

    background-position-x: 150%;
    background-position-y: 82%;
    background-size: 110%;

    .box {
      width: 100%;
      padding: 2rem 2rem 2rem 2rem;

      .platforms {
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;

        img {
          width: 40%;
        }
      }
    }
  }
`;
