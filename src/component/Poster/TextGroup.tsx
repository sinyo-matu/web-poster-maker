import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
export const TextGroup = ({ atom }: { atom: any }) => {
  const [texts] = useAtom(atom);
  if (!texts) {
    return null;
  }
  return (
    <TextGroupWrapper>
      {(texts as string[]).map((text, i) => {
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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const Wrapper = styled.div`
  overflow-wrap: break-word;
  font-size: calc(5px + 1vmin);
`;
