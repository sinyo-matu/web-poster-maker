import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { titleAtom } from "../../lib/store";
import { Color } from "../../styles/Color";

export const TitleArea = ({ atom }: { atom: typeof titleAtom }) => {
  const [text, setText] = useAtom(atom);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText({ ...text, content: event.target.value });
  };

  return (
    <div>
      <AreaTitle>主标题</AreaTitle>
      <Wrapper value={text.content} onChange={handleTextChange} />
    </div>
  );
};

const Wrapper = styled.input`
  box-sizing: border-box;
  width: 350px;
`;

const AreaTitle = styled.div`
  font-size: 20px;
  color: ${Color.MAIN};
`;
