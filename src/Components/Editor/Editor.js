import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = ({ text, changeText }) => {
  return (
    <div id="editor-section">
      <div className="section-title">
        <figure>
          <img src="https://res.cloudinary.com/luisbn/image/upload/v1604468909/markdown-parser/coding_dpxsfo.svg" 
            alt="code icon"
          />
          <figcaption>Editor</figcaption>
        </figure>
      </div>
      <AceEditor
        style={{
          width: "100%",
          height: "calc(100vh - (10vh + 3 * 1rem)",
          resize: "none",
          padding: "1.5rem",
        }}
        theme="monokai"
        mode="markdown"
        value={text}
        onChange={(e) => changeText(e)}
      />
    </div>
  );
};

export default Editor;
