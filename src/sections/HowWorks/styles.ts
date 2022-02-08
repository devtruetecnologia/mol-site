import styled from "styled-components";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 46.375rem;
  background: url('lines/line-how.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0;
  padding: 6.25rem 15%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: inherit;
    padding: 4rem 15% 6rem 15%;
  }

  @media (max-width: 375px) {
    align-items: center;
    padding: 4rem 0 6rem 0;
  }
`;