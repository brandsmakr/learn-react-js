import React, { useState } from "react";

export default function About() {
  // let myStyle  ={
  //     color: "#9388e0",
  //     backgroundColor: "#f7f7f7"
  // }

  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const toggleStyle =()=>{
    if(myStyle.color === 'black')
    {
        setmyStyle({
            color: "#9388e0",
            backgroundColor: "black",
            border: '1px solid white'
        })
        setbtnText("Enable Light Mode")
    }
    else
    {
        setmyStyle({
            color: "black",
            backgroundColor: "white"
        })
        setbtnText("Enable Dark Mode")
    }
  }

  // let accordinBtnStyle = {
  //   color: "white",
  //   backgroundColor: "#0d6efd",
  //   transistion: "0.5 color, 0.5s backgroundColor"
  // };
  
  const [accordinBtnStyle, setAccordinBtnStyle] = useState({
  });

  // on Click accordin btn style
  const accordinBtn = ()=>{
    console.log("on CLick specific element value change");
    setAccordinBtnStyle({
      color: "white",
      backgroundColor: "#0d6efd",
    })
  }
  const accordinBtn1 = accordinBtn;
  const accordinBtn2 = accordinBtn;
  const accordinBtn3 = accordinBtn;

  return (
    <div className="container py-5 px-5" style={myStyle}>
      <h1 className="my-5 text-center">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={accordinBtnStyle}
              onClick={accordinBtn1}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={accordinBtnStyle}
              onClick={accordinBtn2}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={accordinBtnStyle}
              onClick={accordinBtn3}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button
        className="my-3 w-25 mx-auto d-flex justify-content-center btn btn-primary"
        onClick={toggleStyle}
      >
        {btnText}
      </button>
    </div>
  );
}
