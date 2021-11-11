import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { deriveFadeIn } from "../../styles/animation";
import { subTitleAtom } from "../../lib/store";
import { Color } from "../../styles/Color";

export const SubTitleArea = ({ atom }: { atom: typeof subTitleAtom }) => {
  const [property, setProperty] = useAtom(atom);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProperty({ ...property, content: event.target.value });
  };

  return (
    <FadeInWrapper>
      <AreaTitle>副标题</AreaTitle>
      <Input value={property.content} onChange={handleTextChange} />
    </FadeInWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const FadeInWrapper = deriveFadeIn(Wrapper);

const Input = styled.textarea`
  box-sizing: border-box;
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
