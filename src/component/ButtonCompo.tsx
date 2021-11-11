import React, { useState } from "react";
import { Button } from "../styles/atoms/Button";

interface Props {
  children?: React.ReactElement | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, name?: string) => void;
  type?: "circle" | "pill";
  selected?: boolean;
  name?: string;
}

export const ButtonCompo = ({
  children,
  onClick,
  type,
  selected,
  name,
}: Props) => {
  const [clicked, setClicked] = useState(false);
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event, name);
    }
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };
  return (
    <Button
      name={name}
      clicked={clicked}
      buttontype={type}
      onClick={handleOnClick}
      selected={selected}
    >
      {children}
    </Button>
  );
};
