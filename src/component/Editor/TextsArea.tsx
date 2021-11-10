import { useAtom } from "jotai";
import React, { useState } from "react";
import styled from "styled-components";
import { textsAtom } from "../../lib/store";
import { Color } from "../../styles/Color";

export const TextsArea = ({ atom }: { atom: typeof textsAtom }) => {
  const [property, setProperty] = useAtom(atom);
  const [textContent, setTextContent] = useState(property.content);
  const handleTextsAreaOnChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const changedValue = event.target.value;
    setProperty({ ...property, content: changedValue });
    setTextContent(changedValue);
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
  color: ${Color.MAIN};
`;
