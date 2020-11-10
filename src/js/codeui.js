import React from "react";

function Codeui(props) {
  return (
    <pre>
      <code>
        <div>{props.data}</div>
      </code>
    </pre>
  );
}

export default Codeui;
