import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { contentsAtomsAtom } from "../../lib/store";
import { AddButtons } from "./InputArea/AddButtons";
import { InputArea } from "./InputArea";
export const Editor = () => {
  const [contentsAtoms] = useAtom(contentsAtomsAtom);
  return (
    <Wrapper>
      <AddButtons index={-1} />
      {contentsAtoms.map((type, i) => {
        return <InputArea key={i} type={type} index={i} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0px;
`;
