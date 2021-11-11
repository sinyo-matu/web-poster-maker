import { useAtom } from "jotai";
import styled from "styled-components";
import { titleAtom } from "../../lib/store";
import { Color } from "../../styles/Color";
export const Title = ({ atom }: { atom: typeof titleAtom }) => {
  const [content] = useAtom(atom);
  if (!content) {
    return null;
  }
  return <Wrapper>{content.content}</Wrapper>;
};

const Wrapper = styled.div`
  justify-self: center;
  color: ${Color.MAIN};
  margin-bottom: 10px;
  font-size: calc(10px + 2vmin);
`;
