import styled from "styled-components";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 45rem;
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
    width: 100vw;
    position: absolute;
    top: 4.938rem;
    left: 0;
    z-index: 0;
  }
`;