import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  overflow: hidden;
  width: 100%;
  min-height: 32rem;
  background-position-x: 80%;
  background-position-y: 70%;
  background-size: 40%;
  background-repeat: no-repeat;
  background-color: ${colors.primaryGrey};
  margin: 0;
  padding: 3rem 10% 6rem 10%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  .boxes {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .carousel {
    display: none;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 3rem 10% 6rem 10%;

    .boxes {
      display: none;
    }

    .carousel {
      display: initial;
      margin-top: -2rem;
    }
  }

  @media (max-width: 425px) {
    padding: 6rem 10% 9rem 10%;
    align-items: center;

    .boxes {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .carousel {
      display: none;
    }
  }
`;

export const Title = styled.h3`
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1rem;
  color: ${colors.primaryWhite};

  @media (max-width: 425px) {
    font-size: 1.75rem;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.5rem;
  line-height: 1rem;
  color: ${colors.primaryWhite};

  @media (max-width: 425px) {
    font-size: 1.2rem;
    margin-top: 0.75rem;
  }
`;

interface BoxRegisterProps {
  index: number;
}

export const BoxRegister = styled(motion.div)<BoxRegisterProps>`
  height: 25rem;
  width: 25%;
  cursor: pointer;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    ${(props) =>
      props.index == 1
        ? "url('images/register/1.jpg')"
        : props.index == 2
        ? "url('images/register/2.jpg')"
        : "url('images/register/0.jpg')"};
  background-size: cover;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1.2rem 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    height: 30rem;

    & + & {
      margin-top: 1rem;
    }
  }
`;
