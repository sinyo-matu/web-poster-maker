import { useAtom } from "jotai";
import styled from "styled-components";
import { contentsAtomsAtom } from "../../../lib/store";
import {
  ImageType,
  SubTitleTextType,
  TextGroupType,
  TitleTextType,
} from "../../../types/poster";
import { ButtonCompo } from "../../ButtonCompo";

export const DeleteButton = ({
  index,
}: {
  index: number;
  type: TitleTextType | SubTitleTextType | TextGroupType | ImageType;
}) => {
  const [contentsAtoms, setContentsAtoms] = useAtom(contentsAtomsAtom);
  const handleOnClick = async () => {
    localStorage.removeItem(contentsAtoms[index].key);
    contentsAtoms.splice(index, 1);
    setContentsAtoms([...contentsAtoms]);
  };
  return (
    <Wrapper>
      <ButtonCompo
        height="21px"
        type={"circle"}
        onClick={handleOnClick}
        animated={false}
      >
        −
      </ButtonCompo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 50%;
  left: -30px;
  transform: translateX(-50%) translateY(-50%);
`;
