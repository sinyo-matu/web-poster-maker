import { useAtom } from "jotai";
import styled from "styled-components";
import { contentsAtomsAtom } from "../../lib/store";
import { Button } from "../atom/Button";
export const DeleteButton = ({ index }: { index: number }) => {
  const [contentsAtoms, setContentsAtoms] = useAtom(contentsAtomsAtom);
  const handleOnClick = () => {
    localStorage.removeItem(contentsAtoms[index].key);
    contentsAtoms.splice(index, 1);
    setContentsAtoms([...contentsAtoms]);
  };
  return (
    <Wrapper>
      <Button type={"circle"} onClick={handleOnClick}>
        -
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translateX(-50%) translateY(-50%);
`;
