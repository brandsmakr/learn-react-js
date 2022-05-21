import React, { useState } from "react";

export default function TextForm(props) {
  // state handling in react.js
  const [text, setText] = useState("Enter text here");
  // correct way to change the state
  // setText("Updated Text");

  // event handling in react.js
  const handleUpClick = () => {
    console.log("UpperCase was Clicked" + text);
    // setText("You have Click on  handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleCaptializeClick = () => {
    console.log("You calicked handleCaptilizeClick" + text);
    let newText = text.split(" ").map((currentValue) => {
      let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
      return newText;
    });
    setText(newText.join(" "));
  };
  const handleLowClick = () => {
    console.log("LowerCase was Clicked" + text);
    // setText("You have Click on  handleUpClick");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
    // console.log(event.target.value);
  };

  // copy the text
  const handleCopy = () => {
    console.log("copy the text");
    var copy = document.getAnimations("mybox");
    text.select();
    // text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
  };

  // handle extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // use state for font size
  const [size, setSize] = useState(30);

  const fontStyle = {
    fontSize: `${size}px`
  }

  const setNormalFont = ()=>{
    console.log("set normal font");
    setSize(30);
  }

  // increase and dcrease font size
  const increaseFontSize = ()=>{
    console.log("increase Font size");
    setSize(size+1);
  }
  const decreaseFontSize = ()=>{
    console.log("decurease font size");
    setSize(size-1);
  }
  

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control cap"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={fontStyle}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCaptializeClick}
        >
          Convert to CaptilizeClick
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra spaces
        </button>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-dark" onClick={increaseFontSize} >
            +
          </button>
          <button type="button" class="btn btn-secondary" onClick={setNormalFont} >
            Set Normal Font
          </button>
          <button type="button" class="btn btn-dark" onClick={decreaseFontSize}>
            -
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} chracters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p className="cap">{text}</p>
      </div>
    </>
  );
}
