import React, { useState } from "react";

export default function Navbar(props) {
  

  return (
    <div>
      <nav className={` navbar navbar-expand-lg navbar-${props.change} bg-${props.change} `} >
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">Disabled</a>
              </li>
            </ul>
          </div>
          <div className="bg-black rounded mx-2" onClick={()=>props.toggle("dark")} style={{height: '25px', width: "25px",cursor: "pointer" , borderColor:"black" }}></div>
          <div className="bg-primary rounded mx-2"  onClick={()=>props.toggle("primary")} style={{height: '25px', width: "25px",cursor: "pointer"}}></div>
          <div className="bg-success rounded mx-2"  onClick={()=>props.toggle("success")} style={{height: '25px', width: "25px",cursor: "pointer"}}></div>
          <div className="bg-danger rounded mx-2"  onClick={()=>props.toggle("danger")} style={{height: '25px', width: "25px",cursor: "pointer"}}></div>
          <div className="bg-warning rounded mx-2"  onClick={()=>props.toggle("warning")} style={{height: '25px', width: "25px",cursor: "pointer"}}></div>
          <div className="bg-light rounded mx-2"  onClick={()=>props.toggle("light")} style={{height: '25px', width: "25px",cursor: "pointer"}}></div>
          <div className="bg-light rounded mx-2"  onClick={()=>props.toggle("info")} style={{height: '25px', width: "25px",cursor: "pointer"}}></div>

        </div>
      </nav>
    </div>
  );
}
