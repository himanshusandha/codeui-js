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
    </pre>
  );
}

export default Codeui;
