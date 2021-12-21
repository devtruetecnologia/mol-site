import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
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
`;

export const Title = styled.h3`
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1rem;
  color: ${colors.primaryWhite};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.5rem;
  line-height: 1rem;
  color: ${colors.primaryWhite};
`;

interface BoxRegisterProps {
  index: number,
}

export const BoxRegister = styled(motion.div)<BoxRegisterProps>`
  height: 25rem;
  width: 22%;
  cursor: pointer;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), ${props => props.index == 1 ? "url('images/register/1.jpg')" : props.index == 2 ? "url('images/register/2.jpg')" : "url('images/register/0.jpg')"} ;
  background-size: cover;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1.2rem 2rem;
`;