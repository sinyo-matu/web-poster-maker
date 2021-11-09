import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
export const Title = ({ atom }: { atom: any }) => {
  const [content] = useAtom(atom);
  if (!content) {
    return null;
  }
  return <Wrapper>{content as string}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 10px;
  font-size: calc(10px + 2vmin);
`;
