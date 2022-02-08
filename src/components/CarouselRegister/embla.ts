import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const SliderDiv = styled.div`
  position: relative;
  padding: 20px;
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
    overflow: visible;
    width: 150%;
    margin-left: -20rem;
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
    overflow: visible;
  }

  .embla__slide {
    position: relative;
    width: 30rem;
    height: 20rem;
    padding-left: 0.625rem;
  }
`
