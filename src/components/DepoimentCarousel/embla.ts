import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const SliderDiv = styled.div`
  position: relative;
  padding: 20px;
  max-width: 65rem;
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
    width: 86%;
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
    margin: 0 3.75rem;
  }

  .embla__slide__inner {
    position: relative;
    overflow: hidden;
    width: 35.938rem;
    height: 20rem;
  }

  .embla__slide {
    position: relative;
    padding-left: 0.625rem;
    min-width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    
    .text-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 83%;
      margin-left: 1.5rem;
    }

    img {
      width: 7.563rem;
      height: 7.563rem;
      border-radius: 50%;
    }
  }

  .embla__slide__div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const SliderDots = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 10px;

  position: absolute;
  right: 8rem;
  bottom: 2.7rem;
`
