import React from "react";
import "./styles/App.scss";
import { Poster } from "./component/Poster";
import { Editor } from "./component/Editor";

function App() {
  return (
    <div className="App">
      <div className="App-canvas">
        <Poster />
      </div>
      <div className="App-editor">
        <Editor />
      </div>
    </div>
  );
}

export default App;
