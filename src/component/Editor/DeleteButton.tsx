import { useAtom } from "jotai";
import styled from "styled-components";
import { contentsAtomsAtom } from "../../lib/store";
import { COLOR_MAIN } from "../../styles/variables";

export const DeleteButton = ({ index }: { index: number }) => {
  const [contentsAtoms, setContentsAtoms] = useAtom(contentsAtomsAtom);
  const handleOnClick = () => {
    localStorage.removeItem(contentsAtoms[index].key);
    contentsAtoms.splice(index, 1);
    setContentsAtoms([...contentsAtoms]);
  };
  return <Wrapper onClick={handleOnClick}> - </Wrapper>;
};

const Wrapper = styled.div`
  color: ${COLOR_MAIN};
  height: 20px;
  width: 20px;
  border: 1px solid ${COLOR_MAIN};
  border-radius: 50%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
`;
