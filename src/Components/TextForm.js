import React, {useState} from "react";


export default function TextForm(props) {

  // state handling in react.js
  const [text, setText] = useState("Enter text here");
  // correct way to change the state
  // setText("Updated Text");

  // event handling in react.js
  const handleUpClick = ()=>{
    console.log("UpperCase was Clicked" + text);
    // setText("You have Click on  handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = ()=>{
    console.log("LowerCase was Clicked" + text);
    // setText("You have Click on  handleUpClick");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          rows="12"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} chracters</p>
    <p>{0.008 * text.split(" ").length} Minutes to Read</p>
    <h2>Preview</h2>
    <p>
      {text}
    </p>
    </div>
    </>
  );
}
