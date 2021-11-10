import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Color } from "../../styles/Color";

interface Props {
  children?: React.ReactElement | string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "circle" | "pill";
}

export const Button = ({ children, onClick, type }: Props) => {
  const [clicked, setClicked] = useState(false);
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };
  return (
    <Inner clicked={clicked} buttontype={type} onClick={handleOnClick}>
      {children}
    </Inner>
  );
};

interface ButtonPropers {
  clicked?: boolean;
  buttontype?: "circle" | "pill";
}

const Inner = styled.button<ButtonPropers>`
  display: inline-block;
  background-color: white;
  min-height: 20px;
  min-width: 20px;
  border: 1px solid ${Color.MAIN};
  border-radius: ${(props) =>
    props.buttontype === "circle" ? "50%" : "9999px"};
  color: ${Color.MAIN};
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 0px 1px ${Color.MAIN};
  transition: 0.2s;
  ${(props) => (props.clicked ? animation : null)};
  &:hover {
    background-color: ${Color.MAIN};
    color: white;
    border-color: ${Color.MAIN};
    box-shadow: 0px 0px 3px ${Color.MAIN};
  }
`;

const animation = () =>
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
