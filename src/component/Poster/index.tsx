import styled from "styled-components";
import { TextGroup } from "./TextGroup";
import logo from "../../PH-Logo-R2.png";
import { Color } from "../../styles/Color";
import { useAtom } from "jotai";
import { contentsAtomsAtom } from "../../lib/store";
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
export const Poster = () => {
  const [contentsAtoms] = useAtom(contentsAtomsAtom);

  return (
    <Wrapper id="poster-root">
      <ContentWrapper>
        {
          // eslint-disable-next-line array-callback-return
          contentsAtoms.map((atom) => {
            switch (atom.kind) {
              case "titleText":
                return <Title key={`${atom.atom}`} atom={atom.atom} />;
              case "subTitleText":
                return <SubTitle key={`${atom.atom}`} atom={atom.atom} />;
              case "textGroup":
                return <TextGroup key={`${atom.atom}`} atom={atom.atom} />;
            }
          })
        }
      </ContentWrapper>
      <Logo src={logo} alt="logo"></Logo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: 100px;
  width: 400px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 8px solid ${Color.MAIN};
`;
const ContentWrapper = styled.div`
  text-align: center;
  flex-grow: 1;
  padding: 0 5px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  gap: 5px;
`;

const Logo = styled.img`
  height: 1.5rem;
  margin: 10px 0px;
`;
