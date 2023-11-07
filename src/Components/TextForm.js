import React, { useState } from "react";
const TextForm = (props) => {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };
  const handleInverseClick = () => {
    setText(text.split("").reverse().join(""));
    props.showAlert("Converted to InverseCase", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-1">
          Convert to UpperCase
        </button>

        <button onClick={handleLoClick} className="btn btn-primary mx-1">
          Convert to LowerCase
        </button>

        <button onClick={handleInverseClick} className="btn btn-primary mx-1">
          Convert to InverseCase
        </button>
      </div>

      <div
        className="container mt-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text above to preview it."}
        </p>
      </div>
    </>
  );
};

export default TextForm;
