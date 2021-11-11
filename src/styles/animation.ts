import styled, { css, keyframes } from "styled-components";
import { Color } from "./Color";
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

export const PopUp = () =>
  css`
    animation: ${popUp} 0.2s ease;
  `;

const popUp = keyframes`
            0% {
              transform: scale(1);
              box-shadow: 0px 0px 3px ${Color.MAIN};
            }

            80% {
              transform: scale(1.1);
              box-shadow: 0px 0px 5px ${Color.MAIN};
            }

            100% {
              transform: scale(1);
              box-shadow: 0px 0px 3px ${Color.MAIN};
            }
`;
