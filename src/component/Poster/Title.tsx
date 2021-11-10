import { useAtom } from "jotai";
import styled from "styled-components";
import { titleAtom } from "../../lib/store";
export const Title = ({ atom }: { atom: typeof titleAtom }) => {
  const [content] = useAtom(atom);
  if (!content) {
    return null;
  }
  return <Wrapper>{content.content}</Wrapper>;
};

const Wrapper = styled.div`
  margin-top: 10px;
  font-size: calc(10px + 2vmin);
`;
