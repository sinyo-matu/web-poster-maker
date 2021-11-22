import styled from "styled-components";
import { PopUp } from "../animation";
import { Color } from "../Color";

interface ButtonPropers {
  clicked?: boolean;
  buttontype?: "circle" | "pill";
  selected?: boolean;
}

const Button = styled.button<ButtonPropers>`
  display: inline-block;
  background-color: ${(props) => (props.selected ? Color.MAIN : Color.Default)};
  width: 100%;
  height: 100%;
  min-height: 20px;
  min-width: 20px;
  border: 1px solid ${Color.MAIN};
  border-radius: ${(props) =>
    props.buttontype === "circle" ? "50%" : "9999px"};
  color: ${(props) => (props.selected ? Color.Default : Color.MAIN)};
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 0px 3px -1px ${Color.MAIN};
  transition: 0.2s;
  --webkit-transition: 0.2s;
  ${(props) => (props.clicked ? PopUp : null)};
  &:hover,
  &:focus {
    box-shadow: 0px 0px 5px -1px;
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
  &:focus {
    outline-offset: 0.15rem;
    outline-color: ${Color.SUB};
  }
`;

export default Button;
