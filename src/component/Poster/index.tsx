import styled from "styled-components";
import { TextGroup } from "./TextGroup";
import logo from "../../PH-Logo-R2.png";
import { Color } from "../../styles/Color";
import { useAtom } from "jotai";
import { contentsAtomsAtom } from "../../lib/store";
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { Image } from "./Image";
export const Poster = () => {
  const [contentsAtoms] = useAtom(contentsAtomsAtom);

  return (
    <Canvas id="poster-root">
      <PosterRoot>
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
                case "image":
                  return <Image key={`${atom.atom}`} atom={atom.atom} />;
              }
            })
          }
        </ContentWrapper>
        <Logo src={logo} alt="logo"></Logo>
      </PosterRoot>
    </Canvas>
  );
};

const Canvas = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 500px;
  min-height: 667px;
  padding: 50px 30px;
`;

const PosterRoot = styled.div`
  padding: 10px 10px 0px 10px;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: 8px solid ${Color.MAIN};
`;
const ContentWrapper = styled.div`
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
