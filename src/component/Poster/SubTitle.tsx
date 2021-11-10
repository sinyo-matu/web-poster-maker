import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { subTitleAtom } from "../../lib/store";
export const SubTitle = ({ atom }: { atom: typeof subTitleAtom }) => {
  const [content] = useAtom(atom);
  if (!content) {
    return null;
  }
  return <Wrapper>・{content.content}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 10px;
  font-size: calc(8px + 1vmin);
`;
