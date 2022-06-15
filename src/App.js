import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Parent from "./Components/Parent";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("dark"); // whether dark mode is enabled or not

  const [text, setText] = useState("light");

  const toggleMode = (cls) => {
    if (mode === "light") {
      setMode("dark");
      setText("light");
      document.body.style.backgroundColor = "floralwhite";
      showAlert("success ", "Dark has been Mode Enable ");
      document.title = "dark mode enable";
      // setInterval(() => {
      //   document.title ="dark mode enable";
      // }, 2000);
      // setInterval(() => {
      //   document.title ="install text utils now";
      // }, 1000);
    } else {
      setMode("light");
      setText("dark");
      document.body.style.backgroundColor = "CadetBlue";
      showAlert("success ", "light has been Mode Enable");
      document.title = "dark mode enable";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          text={text}
        />
        <Alert alertStatus={alert} />
        <div className="container my-5 py-5">
          <Switch>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  btnAlert={showAlert}
                />
              }
              />
              <Route exact path='/pass-data-from-child-to-parent' element={<Parent />} />
            <Route exact  path="/about" element={<About />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
