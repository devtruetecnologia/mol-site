import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const FooterS = styled.footer`
    width: 100%;
    background-color: ${colors.primaryWhite};
    margin: 0;
    padding: 4rem 13%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    /* box-shadow: 0px 0.25rem 0.25rem #00000040; */

    img {
      width: 12rem;
    }

    .top {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .social {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        img {
          margin-left: 0.5rem;
          width: 2rem;
          /* cursor: pointer; */
          
          &:hover {
            color: ${colors.primaryYellow};
          }
        }
      }
    }

    .separator {
      height: 0.05rem;
      width: 100%;
      background-color: ${colors.primaryYellow};
      margin: 1rem 0 1.5rem 0;
    }

    .bottom {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
`;

export const Anchor = styled.a`
    color: ${colors.primaryBlue};
    font-size: 0.813rem;
    font-weight: 500;
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
      width: 0%;
      height: 0.05rem;

      transition: 400ms ease-in-out;
    }

    &:hover {

      &:after {
        width: 100%;

        transition: 400ms ease-in-out;
      }
    }
`;