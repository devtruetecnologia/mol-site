import { motion } from "framer-motion";
import styled from "styled-components";

interface BoxRegisterProps {
  index: number,
}

export const BoxRegister = styled.div<BoxRegisterProps>`
  height: 25rem;
  width: 100%;
  cursor: pointer;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), ${props => props.index == 1 ? "url('images/register/1.jpg')" : props.index == 2 ? "url('images/register/2.jpg')" : "url('images/register/0.jpg')"} ;
  background-size: cover;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1.2rem 2rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;