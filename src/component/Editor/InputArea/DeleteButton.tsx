import { useAtom } from "jotai";
import styled from "styled-components";
import { contentsAtomsAtom } from "../../../lib/store";
import { removeImage } from "../../../lib/image";
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
        // await removeImage(property.filePath); // if removed the saved item will lost it's image
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
