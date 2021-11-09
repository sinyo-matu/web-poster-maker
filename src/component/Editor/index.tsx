import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { contentsAtomsAtom } from "../../lib/store";
import { SubTitleArea } from "./SubTitleArea";
import { TextsArea } from "./TextsArea";
import { TitleArea } from "./TitleArea";
import { AddButtons } from "./AddButtons";
import { DeleteButton } from "./DeleteButton";
export const Editor = () => {
  const [contentsAtoms] = useAtom(contentsAtomsAtom);
  return (
    <Wrapper>
      {
        // eslint-disable-next-line array-callback-return
        contentsAtoms.map((atom, i) => {
          switch (atom.kind) {
            case "titleText":
              return (
                <InputCompoWrapper>
                  <DeleteButton index={i} />
                  <TitleArea key={`${atom.atom}`} atom={atom.atom} />
                  <AddButtons index={i} />
                </InputCompoWrapper>
              );
            case "subTitleText":
              return (
                <InputCompoWrapper>
                  <DeleteButton index={i} />
                  <SubTitleArea key={`${atom.atom}`} atom={atom.atom} />
                  <AddButtons index={i} />
                </InputCompoWrapper>
              );
            case "textGroup":
              return (
                <InputCompoWrapper>
                  <DeleteButton index={i} />
                  <TextsArea key={`${atom.atom}`} atom={atom.atom} />
                  <AddButtons index={i} />
                </InputCompoWrapper>
              );
          }
        })
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 30px;
`;

const InputCompoWrapper = styled.div`
  position: relative;
`;
