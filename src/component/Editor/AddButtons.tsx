import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import styled from "styled-components";
import { contentsAtomsAtom } from "../../lib/store";
import { random } from "../../lib/utility";
import { COLOR_MAIN, COLOR_SUB } from "../../styles/variables";
import {
  SubTitleTextType,
  TextGroupType,
  TitleTextType,
} from "../../types/poster";

export const AddButtons = ({ index }: { index: number }) => {
  const [contentsAtoms, setContentsAtoms] = useAtom(contentsAtomsAtom);
  const handleTitleButtonOnClick = () => {
    const key = `title-${random()}`;
    const titleAtom = atomWithStorage(key, { content: "" });
    const title = new TitleTextType(key, titleAtom);
    contentsAtoms.splice(index + 1, 0, title);
    setContentsAtoms([...contentsAtoms]);
  };
  const handleSubTitleButtonOnClick = () => {
    const key = `subTitle-${random()}`;
    const titleAtom = atomWithStorage(key, { content: "" });
    const title = new SubTitleTextType(key, titleAtom);
    contentsAtoms.splice(index + 1, 0, title);
    setContentsAtoms([...contentsAtoms]);
  };
  const handleTextGroupButtonOnClick = () => {
    const key = `texts-${random()}`;
    const titleAtom = atomWithStorage(key, { content: "" });
    const title = new TextGroupType(key, titleAtom);
    contentsAtoms.splice(index + 1, 0, title);
    setContentsAtoms([...contentsAtoms]);
  };
  return (
    <Wrapper>
      <ButtonsWrapper>
        <Button onClick={handleTitleButtonOnClick}>主标题</Button>
        <Button onClick={handleSubTitleButtonOnClick}>副标题</Button>
        <Button onClick={handleTextGroupButtonOnClick}>正文</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 20px;
  min-height: 10px;
  width: 350px;
  &:before {
    content: "";
    position: absolute;
    background-color: ${COLOR_MAIN};
    height: 2px;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 100;
    transition: 0.2s;
  }
  &:after {
    content: "+";
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    text-align: center;
    border: 1px solid ${COLOR_MAIN};
    color: ${COLOR_MAIN};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    transition: 0.2s;
    z-index: 101;
  }
  &:hover div {
    height: 50px;
  }

  &:hover::after {
    opacity: 0;
  }

  &:hover::before {
    opacity: 0;
  }
`;

const ButtonsWrapper = styled.div`
  background-color: ${COLOR_SUB};
  height: 0px;
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: 0.5s;
  overflow: hidden;
`;

const Button = styled.button``;
