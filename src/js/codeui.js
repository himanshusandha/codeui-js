import React from "react";
import "../style/codeui.css";

function Codeui(props) {
  return (
    <pre
      className="codeui-base"
      contentEditable={props.contentEditable ? props.contentEditable : false}
    >
      <code className="codeui-code-tag">
        {props.data &&
          props.data.split(/\r?\n/).map((field, idx) => {
            return (
              <div key={idx} className="codeui-code-div-tag">
                <span className="codeui-code-span-tag">{field}</span>
              </div>
            );
          })}
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
