import styled from "styled-components";
import { TextGroup } from "./TextGroup";
import logo from "../../PH-Logo-R2.png";
import { Color } from "../../styles/Color";
import { useAtom } from "jotai";
import { contentsAtomsAtom } from "../../lib/store";
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { Image } from "./Image";
import { ButtonCompo } from "../ButtonCompo";
import html2canvas from "html2canvas";
export const Poster = () => {
  const [contentsAtoms] = useAtom(contentsAtomsAtom);
  const handleOnClick = async () => {
    const canvas = await html2canvas(
      document.querySelector("#poster-root")!,
      {}
    );
    const link = document.createElement("a");
    const date = new Date();
    link.download = `poster_${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}.jpg`;
    link.href = canvas.toDataURL();
    link.click();
  };
  return (
    <>
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
      <ControlGroupWrapper>
        <ButtonCompo onClick={handleOnClick}>下载</ButtonCompo>
      </ControlGroupWrapper>
    </>
  );
};

interface CanvasProps {
  width?: number;
}

const Canvas = styled.div<CanvasProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  width: ${(props) => (props.width ? props.width : 600)}px;
  min-height: 667px;
`;

const PosterRoot = styled.div`
  background-color: transparent;
  padding: 10px 17px 0px 17px;
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
  background-color: inherit;
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

const ControlGroupWrapper = styled.div``;
