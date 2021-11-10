import React from "react";
import "./styles/App.scss";
import { Poster } from "./component/Poster";
import { Editor } from "./component/Editor";
import styled from "styled-components";
import { Button } from "./component/atom/Button";
import html2canvas from "html2canvas";

function App() {
  const handleOnClick = async () => {
    const canvas = await html2canvas(document.querySelector("#poster-root")!);
    const link = document.createElement("a");
    const date = new Date();
    link.download = `poster_${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}.jpg`;
    link.href = canvas.toDataURL();
    link.click();
  };
  return (
    <div className="App">
      <div className="App-canvas">
        <Poster />
        <ButtonWrapper>
          <Button onClick={handleOnClick}>下载</Button>
        </ButtonWrapper>
      </div>
      <div className="App-editor">
        <Editor />
      </div>
    </div>
  );
}

export default App;

const ButtonWrapper = styled.div`
  margin-top: 50px;
`;
