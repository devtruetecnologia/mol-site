import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  height: 44.3rem;
  background: linear-gradient(90.94deg, #EFEFEF 27.1%, rgba(239, 239, 239, 0) 53.2%), url('images/comercial-agent-bg.jpg');
  background-size: cover;
  margin: 0;
  padding: 4.688rem 10% 7.5rem 7.5%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;

  .box {
    width: 26rem;
    margin-left: 9%;
    margin-top: -1.5rem;
    z-index: 1;

    p {
      margin-bottom: 3rem;
    }
  }

  img.bg {
    display: flex;
    width: 100vw;
    position: absolute;
    top: 4.938rem;
    left: 0;
    z-index: 0;
  }

  img.bg-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    height: inherit;

    img.bg {
      top: inherit;
      bottom: 0;
    }
  }

  @media (max-width: 375px) {
    height: 72rem;
    padding: 4.688rem 5% 7.5rem 5%;

    align-items: center;

    .box {
      width: 100%;
      margin-left: 0;
      margin-top: 2rem;
      padding: 3rem 4rem 4rem 4rem;
      border: solid 0.05rem ${colors.colorBorderBase};

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    img.bg {
      display: none;
    }

    img.bg-mobile {
      display: flex;
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100vw;
    }
  }
`;