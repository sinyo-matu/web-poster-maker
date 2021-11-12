import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { subTitleAtom } from "../../lib/store";
export const SubTitle = ({ atom }: { atom: typeof subTitleAtom }) => {
  const [content] = useAtom(atom);
  if (!content) {
    return null;
  }
  return (
    <Wrapper>
      {content.content.split("\n").map((content, i) => {
        return <SubContentWrapper key={i}>{content}</SubContentWrapper>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  &::before {
    content: "●";
    position: absolute;
  }
`;

const SubContentWrapper = styled.div`
  font-size: calc(8px + 1vmin);
  font-weight: bold;
  overflow-wrap: break-word;
  width: calc(100% - 1rem);
  align-self: flex-end;
  justify-self: center;
`;
