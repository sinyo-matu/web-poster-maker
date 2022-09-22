import React from "react";
import styled from "styled-components";
import { useUpdateAtom } from "jotai/utils";
import { showSavedModalAtom } from "../lib/store";
import { ButtonCompo } from "./ButtonCompo";

export const Header = () => {
  const setShowSavedModal = useUpdateAtom(showSavedModalAtom);
  return (
    <Wrapper>
      <ButtonCompo animated={false} onClick={() => setShowSavedModal(true)}>
        已保存海报
      </ButtonCompo>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
