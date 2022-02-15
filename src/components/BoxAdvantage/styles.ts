import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface BoxAdvantageProps {
  mockup: boolean;
  image: string;
  direction: "right" | "left";
}

export const BoxAdvantageS = styled.div<BoxAdvantageProps>`
  width: 100%;
  height: 24.125rem;
  padding: 0 ${(props) => (props.direction === "right" ? "5.188rem" : 0)} 0
    ${(props) => (props.direction === "left" ? "5.188rem" : 0)};

  background: ${(props) =>
      props.mockup
        ? props.direction == "left"
          ? "linear-gradient(-270deg, #03103DBF 40%, rgba(3, 16, 61, 0) 100%)"
          : "linear-gradient(270deg, #03103DBF 45%, rgba(3, 16, 61, 0) 100%)"
        : props.direction == "left"
        ? "linear-gradient(-270deg, #03103D99 40%, rgba(3, 16, 61, 0) 100%)"
        : "linear-gradient(270deg, #03103D99 45%, rgba(3, 16, 61, 0) 100%)"},
    url(${(props) => (props.mockup ? "" : props.image)});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: ${(props) => (props.direction === "right" ? 0 : "100%")};
  position: relative;

  display: flex;
  flex-direction: ${(props) =>
    props.direction === "left" ? "row" : "row-reverse"};
  justify-content: space-between;
  z-index: 99;

  .text-box {
    padding: 2.438rem 0;
    width: ${(props) => (props.mockup ? "39%" : "41%")};
    height: 100%;
    z-index: 9999;
  }

  img.mockup {
    margin-top: -9.125rem;
    margin-bottom: -9.313rem;
    margin-left: ${(props) => (props.direction == "right" ? "6rem" : 0)};
    margin-right: ${(props) => (props.direction == "left" ? "6rem" : 0)};

    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 0 ${(props) => (props.direction === "right" ? "2.188rem" : 0)} 0
      ${(props) => (props.direction === "left" ? "2.188rem" : 0)};
    height: 24.125rem;

    .text-box {
      width: ${(props) => (props.mockup ? "43%" : "41%")};
    }

    img.mockup {
      margin-top: -6.5rem;
      margin-bottom: -6.5rem;
      margin-left: ${(props) => (props.direction == "right" ? "3.5rem" : 0)};
      margin-right: ${(props) => (props.direction == "left" ? "3.5rem" : 0)};

      width: 40%;
      height: fit-content;
    }
  }

  @media (max-width: 425px) {
    height: 60rem;
    background-color: #03103d;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;

    h2 {
      text-align: center;
    }

    .text-box {
      padding: 0 0 1rem 0;
      width: 100%;
      height: fit-content;
    }

    img.mockup {
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
      width: 60%;
    }
  }
`;

export const Bg = styled.div`
  background-color: ${colors.primaryBlue};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  mix-blend-mode: overlay;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 24.125rem;

  @media (max-width: 425px) {
    height: 60rem;
  }
`;
