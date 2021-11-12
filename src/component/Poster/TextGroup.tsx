import { useAtom } from "jotai";
import styled from "styled-components";
import { textsAtom } from "../../lib/store";
export const TextGroup = ({ atom }: { atom: typeof textsAtom }) => {
  const [property] = useAtom(atom);
  if (!property.content) {
    return null;
  }
  return (
    <TextGroupWrapper>
      {property.content.split("\n\n").map((text, i) => {
        return (
          <Wrapper key={i}>
            {text.split("\n").map((subText, i) => {
              if (i === text.split("\n").length - 1) {
                return <>{subText}</>;
              }
              return (
                <>
                  {subText}
                  <br />
                </>
              );
            })}
          </Wrapper>
        );
      })}
    </TextGroupWrapper>
  );
};

const TextGroupWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const Wrapper = styled.div`
  overflow-wrap: break-word;
  font-size: calc(8px + 1vmin);
`;
