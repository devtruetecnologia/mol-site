import styled from "styled-components";
import { Link } from 'react-scroll';
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
  extended?: boolean;
}

interface HeaderProps {
  isOpen: boolean;
}

export const HeaderS = styled.header<HeaderProps>`
  width: 100%;
  background-color: ${colors.primaryBlue};
  margin: 0;
  padding: 0.6rem 8%;

  display: ${props => props.isOpen ? 'none' : 'flex'};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* box-shadow: 0px 0.25rem 0.25rem #00000040; */

  img {
    width: 6rem;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .buttons {
    a {
      margin-right: 0.5rem;
    }
  }

  .menu-mobile {
    display: none;
  }

  .chakra-modal__header {
    .exit-button {
      position: absolute;
    }
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2%;
    position: fixed;

    z-index: 9999;
    
    img {
      width: 8rem;
    }

    nav {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .menu-mobile {
      display: initial;
    }
  }

  @media (max-width: 375px) {
    padding: 0.8rem 3%;

    img {
      width: 9rem;
    }
  }
`;

export const MenuMobile = styled.div`
  border: solid 0.125rem white;
  border-radius: 0.45rem;
  padding: 0.3rem;

  .icon {
    color: white;
    font-size: 2rem;
  }
`;

export const Anchor = styled(Link)`
  color: ${colors.primaryWhite};
  font-size: 0.75rem;
  font-weight: 800;
  transition: 400ms;

  cursor: pointer;

  & + & {
    margin-left: 1.5rem;
  }

  &:after {
    content: '';
    background-color: ${colors.primaryYellow};
    display: block;
    bottom: 0;
    left: 0;
    margin-top: -0.14rem;
    width: 0%;
    height: 0.14rem;

    animation: disappearBar ease-in-out;
    animation-duration: 400ms;
    animation-fill-mode: backwards;
  }

  &:hover {
    &:after {
      animation: appearBar ease-in-out;
      animation-duration: 400ms;
      animation-fill-mode: forwards;
    }
  }

  &.active-anchor {
    &:after {
      animation: appearBar ease-in-out;
      animation-duration: 400ms;
      animation-fill-mode: forwards;
    }
  }

  @media (max-width: 768px) {
    &:after {
      animation: none;
    }

    &:hover {
      &:after {
        animation: none;
      }
    }
  }

  @keyframes appearBar {
    0% {
      margin-top: -0.14rem;
      width: 0%;
    }
    50% {
      margin-top: -0.14rem;
      width: 100%;
    }
    100% {
      margin-top: 0.4rem;
      width: 100%;
    }
  }

  @keyframes disappearBar {
    0% {
      margin-top: 0.4rem;
      width: 100%;
    }
    50% {
      margin-top: -0.14rem;
      width: 100%;
    }
    100% {
      margin-top: -0.14rem;
      width: 0%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    
    & + & {
      margin-left: 0;
    }

    margin: 1rem 0;
  }

  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  color: ${props => props.outlined ? colors.primaryWhite : colors.primaryBlue};
  background-color: ${props => props.outlined ? 'rgba(0, 0, 0, 0)' : colors.primaryYellow};
  font-size: 0.75rem;
  font-weight: 800;
  font-family: Montserrat;
  width: ${props => props.extended ? '100%' : 'initial'};
  border: solid 0.09rem ${colors.primaryYellow};
  padding: .45rem .8rem;
  border-radius: .2rem;
  transition: 400ms;

  cursor: pointer;

  & + & {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: ${colors.primaryGrey};
    color: ${colors.primaryBlue};
    border: solid 0.09rem ${colors.primaryGrey};

    transition: 600ms;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 375px) {
    font-size: 1.4rem;

    &.register {
      margin-right: -10rem;
    }

    &.access {
      display: none;
    }
  }
`;