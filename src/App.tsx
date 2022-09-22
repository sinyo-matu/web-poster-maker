import React from "react";
import "./styles/App.scss";
import { Poster } from "./component/Poster";
import { Editor } from "./component/Editor";
import { useAtom } from "jotai";
import { showSavedModalAtom } from "./lib/store";
import { Modal } from "./component/Modal";
import { Header } from "./component/Header";
import { SavedPostersList } from "./component/SavedPostersList";

function App() {
  const [showSavedModal, setShowSavedModal] = useAtom(showSavedModalAtom);
  const modalClose = () => {
    setShowSavedModal(false);
  };
  return (
    <div className="App">
      <Header />
      <div className="App-canvas">
        <Poster />
      </div>
      <div className="App-editor">
        <Editor />
      </div>
      {showSavedModal ? (
        <Modal myOnClick={modalClose} children={<SavedPostersList />} />
      ) : null}
    </div>
  );
}

export default App;
