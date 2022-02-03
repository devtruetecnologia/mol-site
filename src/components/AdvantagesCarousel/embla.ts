import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const SliderDiv = styled.div`
  position: relative;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  width: 100vw;

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
    width: 100%;
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
    margin: 0;
  }

  .embla__slide__inner {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 60rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .embla__slide {
    position: relative;
    min-width: 100%;

    padding: 0 2rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
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
  bottom: -5rem;

  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  right: 0;
`
