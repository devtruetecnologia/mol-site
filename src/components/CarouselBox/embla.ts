import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const SliderDiv = styled.div`
  position: relative;
  padding: 20px;
  max-width: 63.5rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .icon {
    font-size: 2rem;
    line-height: 0;
  }

  .embla__viewport {
    overflow: hidden;
    width: 84%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -10px;
  }

  .gradient {
    background: linear-gradient(
      0deg,
      #152346 25.95%,
      rgba(21, 41, 80, 0) 98.56%
    );
    width: 51.25rem;
    height: 15.25rem;
    position: absolute;
    bottom: 0rem;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 9.25rem 2.2rem 0 2.2rem;

    .number-box {
      position: relative;

      p {
        color: ${colors.primaryBlue};
        font-weight: 600;
        font-size: 1.5rem;
        position: absolute;
        left: 1.2rem;
        top: 0.8rem;
      }

      img {
        width: 3.25rem;
      }
    }

    .text-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 83%;
      margin-left: 1.5rem;
    }
  }

  .embla__slide {
    position: relative;
    min-width: 100%;
    padding-left: 0.625rem;
  }

  .embla__slide__inner {
    position: relative;
    overflow: hidden;
    width: 51.25rem;
    height: 27.063rem;
  }

  .embla__slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    width: 51.25rem;
    height: 27.063rem;
    max-width: none;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    padding: 0;
    max-width: 55rem;
    margin-left: -12%;
    margin-top: 2rem;
  }

  @media (max-width: 425px) {
    margin-left: 0;

    .embla__container {
      margin-left: -6px;
    }

    .embla__viewport {
      overflow: hidden;
      width: 100vw;
    }

    .embla__slide__inner {
      width: 100vw;
      height: 40rem;
    }

    .embla__slide__img {
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      width: auto;
      width: 100vw;
      height: 40rem;
      object-fit: cover;
      max-width: none;
      transform: translate(-50%, -50%);
    }

    .gradient {
      background: linear-gradient(
        0deg,
        #152346 25.95%,
        rgba(21, 41, 80, 0) 98.56%
      );
      width: 100vw;
      height: 22rem;

      padding: 9.25rem 4rem 0 4rem;

      .number-box {
        p {
          color: ${colors.primaryBlue};
          font-weight: 600;
          font-size: 3rem;
          position: absolute;
          left: 1.6rem;
          top: 0.65rem;
        }

        img {
          width: 5rem;
        }
      }

      .text-box {
        width: 83%;
        margin-left: 1.5rem;
      }
    }
  }
`;

export const SliderDots = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 10px;

  position: absolute;
  right: 8rem;
  bottom: 2.7rem;

  @media (max-width: 768px) {
    right: 5.5rem;
    bottom: 1rem;
  }
`;
