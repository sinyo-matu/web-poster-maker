import { useAtom } from "jotai";
import styled from "styled-components";
import { titleAtom } from "../../lib/store";
import { Color } from "../../styles/Color";
export const Title = ({ atom }: { atom: typeof titleAtom }) => {
  const [content] = useAtom(atom);
  if (!content) {
    return null;
  }
  return (
    <Wrapper>
      {content.content.split("\n").map((content, i) => {
        return <SubContentWrapper key={i}>{content}</SubContentWrapper>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubContentWrapper = styled.div`
  font-size: calc(16px + 2vmin);
  font-family: "UNICA ONE";
  font-weight: bold;
  overflow-wrap: break-word;
  width: 100%;
  text-align: center;
  justify-self: center;
  color: ${Color.MAIN};
`;
