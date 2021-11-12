import { useAtom } from "jotai";
import React, { useState } from "react";
import styled from "styled-components";
import { deriveFadeIn } from "../../../styles/animation";
import { Color } from "../../../styles/Color";
import { TextGroupType } from "../../../types/poster";

export const TextsArea = ({ type }: { type: TextGroupType }) => {
  const [property, setProperty] = useAtom(type.atom);
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

const Wrapper = deriveFadeIn(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`);

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
