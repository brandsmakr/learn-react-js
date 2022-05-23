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
    props.btnAlert("success ", "The text has been converted to uperCase");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
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
    props.btnAlert("success ", "The text has been converted to lowerCase");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
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
    props.btnAlert("success ", " The text has been copied");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };

  // handle extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.btnAlert("success ", "The extra spaves has been removed from text");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };

  // use state for font size
  const [size, setSize] = useState(30);

  const myBoxStyle = {
    fontSize: `${size}px`,
    backgroundColor: `${props.mode === "light" ? "CadetBlue" : "floralwhite"}`,
    color: `${props.mode === "light" ? "white" : ""}`,
  };

  const textColor = {
    color: `${props.mode === "light" ? "white" : ""}`,
  };

  const setNormalFont = () => {
    console.log("set normal font");
    setSize(30);
    props.btnAlert("success ", "The font size has been set to normal fontSize");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };

  // increase and dcrease font size
  const increaseFontSize = () => {
    console.log("increase Font size");
    setSize(size + 1);
    props.btnAlert(
      "success ",
      "The font size has been increase to normal fontSize"
    );
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };
  const decreaseFontSize = () => {
    console.log("decurease font size");
    setSize(size - 1);
    props.btnAlert(
      "success ",
      "The font size has been decrease to normal fontSize"
    );
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };

  return (
    <>
      <div className="container">
        <h1 style={textColor}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control cap"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={myBoxStyle}
            // style={`{backgroundColor: props.mode==='light'?'CadetBlue':'floralwhite', color: props.mode==='light'?'white':'' }` }
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
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-dark"
            onClick={increaseFontSize}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={setNormalFont}
          >
            Set Normal Font
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={decreaseFontSize}
          >
            -
          </button>
        </div>
      </div>
      <div className="container my-5 py-5 d-flex" style={textColor}>
        <div className="w-75">
          <h2>Preview</h2>
          <p className="cap">
            {text.length > 0 ? text : "Enter something to preview it here"}
          </p>
        </div>
        <div className="w-25 text-center">
          <h2>Your text summary</h2>
          <p>
            {wordCount(text)}
            {/* {text.split(" ").length}*/} words and {text.length} chracters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        </div>
      </div>
    </>
  );

  function wordCount(content) {
    if (content === "") {
      return 0;
    } 
      let arr = content.split(" ");
      let len = arr.length;
      let count = 0;

      for (let i = 0; i < len; i++) {
        if (arr[i] === "" || arr[i] === " ") {
          count++;
        }
      }
      return len - count;
    
  }
}
