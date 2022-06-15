import React from "react";
import propTypes from "prop-types";
import {Link } from "react-router-dom";


export default function Navbar(props) {

  const antiquewhite = "antiquewhite";
  const burlywood = "burlywood";
  const lightcoral = "lightcoral";
  const peachpuff = "peachpuff";

  const circlestyle1 = {
    width: "1em",
    height: "1em",
    backgroundColor: `${antiquewhite}`,
    border: `1px solid ${antiquewhite}`,
    borderRadius: "50%"
  }
  const circlestyle2 ={
    width: "1em",
    height: "1em",
    backgroundColor: `${burlywood}`,
    border: `1px solid ${burlywood}`,
    borderRadius: "50%"
  }
  const circlestyle3 ={
    width: "1em",
    height: "1em",
    backgroundColor: `${lightcoral}`,
    border: `1px solid ${lightcoral}`,
    borderRadius: "50%"
  }
  const circlestyle4 ={
    width: "1em",
    height: "1em",
    backgroundColor: `${peachpuff}`,
    border: `1px solid ${peachpuff}`,
    borderRadius: "50%"
  }

  const setAntiquewhite = ()=>{
    // console.log(antiquewhite);
    document.body.style.backgroundColor = antiquewhite; 
  }
  const setBurlywood = ()=>{
    // console.log(burlywood);
    document.body.style.backgroundColor = burlywood; 
  }
  const setLightcoral = ()=>{
    // console.log(lightcoral);
    document.body.style.backgroundColor = lightcoral; 
  }
  const setPeachpuff = ()=>{
      // console.log(peachpuff);
      document.body.style.backgroundColor = peachpuff; 
  }
  

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="d-flex px-5">
            <div style={circlestyle1} className="mx-2"  onClick={setAntiquewhite}></div>
            <div style={circlestyle2} className="mx-2" onClick={setBurlywood}></div>
            <div style={circlestyle3} className="mx-2" onClick={setLightcoral}></div>
            <div style={circlestyle4} className="mx-2" onClick={setPeachpuff}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `} >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {props.mode==='light'?'dark':'light'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string,
};

// Navbar.defaultProps = {
//   title: "title please",
//   about: "Menus"
// }
