import { useAtom } from "jotai";
import styled from "styled-components";
import { contentsAtomsAtom } from "../../../lib/store";
import { removeImage } from "../../../lib/supabase";
import {
  ImageType,
  SubTitleTextType,
  TextGroupType,
  TitleTextType,
} from "../../../types/poster";
import { ButtonCompo } from "../../ButtonCompo";

export const DeleteButton = ({
  index,
  type,
}: {
  index: number;
  type: TitleTextType | SubTitleTextType | TextGroupType | ImageType;
}) => {
  const [contentsAtoms, setContentsAtoms] = useAtom(contentsAtomsAtom);
  const handleOnClick = async () => {
    if (type.kind === "image") {
      try {
        const property = JSON.parse(
          localStorage.getItem(contentsAtoms[index].key)!
        );
        await removeImage(property.filePath);
      } catch (error: any) {
        alert(error);
      } finally {
        localStorage.removeItem(contentsAtoms[index].key);
        contentsAtoms.splice(index, 1);
        setContentsAtoms([...contentsAtoms]);
        return;
      }
    }
    localStorage.removeItem(contentsAtoms[index].key);
    contentsAtoms.splice(index, 1);
    setContentsAtoms([...contentsAtoms]);
  };
  return (
    <Wrapper>
      <ButtonCompo type={"circle"} onClick={handleOnClick} animated={false}>
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
