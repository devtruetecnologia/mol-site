import styled from "styled-components";
import { Link } from 'react-scroll';
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
  extended?: boolean;
}

export const HeaderS = styled.header`
    width: 100%;
    background-color: ${colors.primaryBlue};
    margin: 0;
    padding: 0.6rem 8%;

    display: flex;
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
`;

export const Button = styled.button<ButtonProps>`
    color: ${props => props.outlined ? colors.primaryWhite : colors.primaryBlue};
    background-color: ${props => props.outlined ? 'rgba(0, 0, 0, 0)' : colors.primaryYellow};
    font-size: 0.75rem;
    font-weight: 800;
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
`;