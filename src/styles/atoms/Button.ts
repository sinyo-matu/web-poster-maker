import styled from "styled-components";
import { PopUp } from "../animation";
import { Color } from "../Color";

interface ButtonPropers {
  name?: string;
  clicked?: boolean;
  buttontype?: "circle" | "pill";
  selected?: boolean;
}

export const Button = styled.button<ButtonPropers>`
  display: inline-block;
  background-color: ${(props) => (props.selected ? Color.MAIN : "white")};
  width: 100%;
  height: 100%;
  min-height: 20px;
  min-width: 20px;
  border: 1px solid ${Color.MAIN};
  border-radius: ${(props) =>
    props.buttontype === "circle" ? "50%" : "9999px"};
  color: ${(props) => (props.selected ? "white" : Color.MAIN)};
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 0px 1px ${Color.MAIN};
  transition: 0.2s;
  ${(props) => (props.clicked ? PopUp : null)};
  &:hover {
    background-color: ${Color.MAIN};
    color: white;
    border-color: ${Color.MAIN};
    box-shadow: 0px 0px 3px ${Color.MAIN};
  }
`;
