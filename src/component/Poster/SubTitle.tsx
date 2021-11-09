import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
export const SubTitle = ({ atom }: { atom: any }) => {
  const [content] = useAtom(atom);
  if (!content) {
    return null;
  }
  return <Wrapper>・{content}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 10px;
  font-size: calc(8px + 1vmin);
`;
