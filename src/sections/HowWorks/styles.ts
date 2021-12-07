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
`;