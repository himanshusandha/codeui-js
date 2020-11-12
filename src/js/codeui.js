import React from "react";
import "../style/codeui.css";

function Codeui(props) {
  return (
    <pre
      className="codeui-base"
      contentEditable={props.contentEditable ? props.contentEditable : false}
    >
      <code className="codeui-code-tag">
        <div>{props.data}</div>
      </code>
      {props.fileName && (
        <div className="codeui-fileName" contentEditable={false}>
          <div>{props.fileName}</div>
          <div>Made with &#9829; by Himanshu Sandha</div>
        </div>
      )}
    </pre>
  );
}

export default Codeui;
