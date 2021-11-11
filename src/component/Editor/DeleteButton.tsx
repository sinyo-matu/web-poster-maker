import { useAtom } from "jotai";
import styled from "styled-components";
import { contentsAtomsAtom } from "../../lib/store";
import { removeImage } from "../../lib/supabase";
import { ButtonCompo } from "../ButtonCompo";

export const DeleteButton = ({ index }: { index: number }) => {
  const [contentsAtoms, setContentsAtoms] = useAtom(contentsAtomsAtom);
  const handleOnClick = async () => {
    const property = JSON.parse(
      localStorage.getItem(contentsAtoms[index].key)!
    );
    if (property.filePath) {
      try {
        removeImage(property.filePath);
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
      <ButtonCompo type={"circle"} onClick={handleOnClick}>
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
