import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 32rem;
  background-color: ${colors.primaryWhite};
  margin: 0;
  padding: 3rem 8% 5.5rem 8%;

  overflow: hidden;

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

  .box-video {
    position: relative;
    width: 36rem;
    height: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
  }

  .box {
    width: 48.5%;
    height: 22rem;
    padding: 3rem 2rem 3rem 2.9rem;
    border: solid 0.05rem ${colors.colorBorderBase};
  }

  @media (max-width: 768px) {
    .box-section {
      flex-direction: column;
    }

    .box-video {
      width: 50rem;
      height: 32rem;
    }

    .box {
      width: 100%;
      margin-top: 2rem;
      height: inherit;

      padding: 2rem 2rem 2.5rem 2.9rem;
    }
  }

  @media (max-width: 425px) {
    justify-content: space-evenly;
    align-items: center;
    padding: 5rem 5% 6.5rem 5%;

    .box-video {
      width: 100%;
      height: 20rem;
    }
  }
`;

interface ThumbVideoProps {
  playing: boolean;
}

export const ThumbVideo = styled.div<ThumbVideoProps>`
  position: absolute;
  display: ${(props) => (props.playing ? "none" : "block")};
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: url("images/video.jpg");
  background-position: center;
  background-size: cover;

  transition: 400ms ease-in-out;
`;
