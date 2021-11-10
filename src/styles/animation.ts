import styled, { keyframes } from "styled-components";
export const fadeIn = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

export const deriveFadeIn = (component: any) => {
  return styled(component)`
    opacity: 0;
    animation: ${fadeIn} 0.2s linear;
    animation-fill-mode: forwards;
  `;
};
