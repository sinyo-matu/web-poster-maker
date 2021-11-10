import { useAtom } from "jotai";
import React, { useState } from "react";
import styled from "styled-components";
import { textsAtom } from "../../lib/store";
import { deriveFadeIn } from "../../styles/animation";
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
    <Wrapper>
      <AreaTitle>正文</AreaTitle>
      <TextArea value={textContent} onChange={handleTextsAreaOnChange} />
    </Wrapper>
  );
};

const Wrapper = deriveFadeIn(styled.div``);

const TextArea = styled.textarea`
  box-sizing: border-box;
  height: 100px;
  width: 350px;
  border-radius: 3px;
  border: 1.5px solid ${Color.MAIN};
  &:focus {
    outline-color: ${Color.MAIN};
  }
`;

const AreaTitle = styled.div`
  font-size: 14px;
  color: ${Color.MAIN};
`;
