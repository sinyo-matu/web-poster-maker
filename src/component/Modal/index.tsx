import React from "react";
import styled, { keyframes } from "styled-components";
interface Props {
  myOnClick: () => void;
  children: React.ReactNode;
}
export const Modal = ({ myOnClick, children }: Props) => {
  return (
    <Wrapper onClick={myOnClick}>
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};

const fadeIn = keyframes`
    0% {
     opacity: 0;
  }
  100% {
     opacity: 1;
  }
`;

const Wrapper = styled.div`
  z-index: 50;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  inset: 0;
  background-color: #00000050;
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
const ContentWrapper = styled.div`
  z-index: 50;
  width: 33%;
  box-sizing: border-box;
  padding: 1.5rem;
`;
