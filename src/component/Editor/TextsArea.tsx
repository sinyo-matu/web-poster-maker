import { useAtom } from "jotai";
import React, { useState } from "react";
import styled from "styled-components";
import { COLOR_MAIN } from "../../styles/variables";

export const TextsArea = ({ atom }: { atom: any }) => {
  const [, setTexts] = useAtom(atom);
  const [textContent] = useState();
  const handleTextsAreaOnChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const changedValue = event.target.value;
    setTexts(changedValue.split("\n\n"));
  };
  return (
    <div>
      <AreaTitle>正文</AreaTitle>
      <Wrapper value={textContent} onChange={handleTextsAreaOnChange} />
    </div>
  );
};

const Wrapper = styled.textarea`
  box-sizing: border-box;
  height: 100px;
  width: 350px;
`;

const AreaTitle = styled.div`
  font-size: 14px;
  color: ${COLOR_MAIN};
`;
