import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { subTitleAtom } from "../../lib/store";
import { COLOR_MAIN } from "../../styles/variables";

export const SubTitleArea = ({ atom }: { atom: typeof subTitleAtom }) => {
  const [property, setProperty] = useAtom(atom);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProperty({ ...property, content: event.target.value });
  };

  return (
    <div>
      <AreaTitle>副标题</AreaTitle>
      <Wrapper value={property.content} onChange={handleTextChange} />
    </div>
  );
};

const Wrapper = styled.input`
  box-sizing: border-box;
  width: 350px;
`;

const AreaTitle = styled.div`
  font-size: 14px;
  color: ${COLOR_MAIN};
`;
