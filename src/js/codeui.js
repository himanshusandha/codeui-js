import React from "react";
import "../style/codeui.css";
import theme from "./theme";

function Codeui(props) {
  const preTagInlineStyle = {
    whiteSpace: props.wrap === true ? "pre-wrap" : "",
    borderRadius: props.borderRadius,
    lineHeight: props.lineHeight,
    fontSize: props.fontSize,
    backgroundColor: props.backgroundColor,
    color: props.textColor,
  };

  const codeDivHighlightInlineStyle = {
    backgroundColor: props.highlighterColor,
    borderLeftColor: props.highlighterLeftColor,
  };

  if (props.theme && theme[props.theme]) {
    preTagInlineStyle.backgroundColor = theme[props.theme].backgroundColor;
    preTagInlineStyle.color = theme[props.theme].textColor;
    codeDivHighlightInlineStyle.backgroundColor =
      theme[props.theme].highlighterColor;
    codeDivHighlightInlineStyle.borderLeftColor =
      theme[props.theme].highlighterLeftColor;
  }

  return (
    <pre
      className="codeui-base"
      contentEditable={props.contentEditable ? props.contentEditable : false}
      style={preTagInlineStyle}
    >
      <code className="codeui-code-tag">
        {props.data &&
          props.data.split(/\r?\n/).map((field, idx) => {
            return (
              <div
                key={idx}
                className={`codeui-code-div-tag ${
                  props.lineNumbering === false ? "" : "codeui-line-number"
                } ${
                  props.lineToHighlight &&
                  props.lineToHighlight
                    .split(/\r?,/)
                    .includes((idx + 1).toString())
                    ? "codeui-highlight"
                    : "codeui-no-highlight"
                }`}
                style={{
                  backgroundColor:
                    props.lineToHighlight &&
                    props.lineToHighlight
                      .split(/\r?,/)
                      .includes((idx + 1).toString())
                      ? codeDivHighlightInlineStyle.backgroundColor
                      : "",
                  borderLeftColor:
                    props.lineToHighlight &&
                    props.lineToHighlight
                      .split(/\r?,/)
                      .includes((idx + 1).toString())
                      ? codeDivHighlightInlineStyle.borderLeftColor
                      : "",
                }}
              >
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
