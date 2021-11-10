import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { titleAtom } from "../../lib/store";
import { deriveFadeIn } from "../../styles/animation";
import { Color } from "../../styles/Color";

export const TitleArea = ({ atom }: { atom: typeof titleAtom }) => {
  const [text, setText] = useAtom(atom);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText({ ...text, content: event.target.value });
  };

  return (
    <Wrapper>
      <AreaTitle>主标题</AreaTitle>
      <Input value={text.content} onChange={handleTextChange} />
    </Wrapper>
  );
};

const Wrapper = deriveFadeIn(styled.div``);
const Input = styled.input`
  box-sizing: border-box;
  width: 350px;
  border-radius: 3px;
  border: 1.5px solid ${Color.MAIN};
  &:focus {
    outline-color: ${Color.MAIN};
  }
`;

const AreaTitle = styled.div`
  font-size: 20px;
  color: ${Color.MAIN};
`;
