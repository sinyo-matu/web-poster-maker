import { useAtomValue, useUpdateAtom } from "jotai/utils";
import React from "react";
import styled from "styled-components";
import {
  remoteFromSavedPosterAtom,
  savedPosterAtom,
  setContentsAtomsAtom,
} from "../lib/store";
import { Color } from "../styles/Color";
import { ButtonCompo } from "./ButtonCompo";

export const SavedPostersList = () => {
  const removeFromSavedPosters = useUpdateAtom(remoteFromSavedPosterAtom);
  const setContentsAtoms = useUpdateAtom(setContentsAtomsAtom);
  const savedPosters = useAtomValue(savedPosterAtom);
  const handleXonClick = (title: string) => {
    removeFromSavedPosters(title);
  };
  const handleTitleOnClick = (title: string) => {
    console.log("clicked");
    setContentsAtoms(title);
  };
  return (
    <Wrapper>
      <AreaTitle>已保存海报</AreaTitle>
      <ListWrapper>
        {savedPosters.map((title) => {
          return (
            <ListItemWrapper key={title}>
              <Title onClick={() => handleTitleOnClick(title)}>{title}</Title>
              <ButtonCompo
                type="circle"
                height="22px"
                onClick={() => handleXonClick(title)}
              >
                X
              </ButtonCompo>
            </ListItemWrapper>
          );
        })}
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const ListWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.div`
  cursor: pointer;
`;

const AreaTitle = styled.div`
  font-size: 20px;
  color: ${Color.MAIN};
`;
