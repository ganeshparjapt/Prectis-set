import React, { useState } from "react";

export default function Form() {
const [textArea , settextArea] = useState("");
  let  handleOnchange = (event) =>{
    let newTextArea = (event.target.value);
    settextArea(newTextArea)
    }
    let handleUpperCase = () =>{
        let newtext = (textArea.toUpperCase());
        settextArea(newtext);
    }
    let handleLoverCase = () =>{
        let newtext = (textArea.toLocaleLowerCase());
        settextArea(newtext);
    }
    let removeSpace = () =>{
        // let newtext =(textArea.replace(/\s+/g,' '));
        let newtext = (textArea.split(/[ ]+/).join(" "));
        settextArea(newtext);
     }
    let copyText = () =>{
            navigator.clipboard.writeText(textArea);
            alert("copied the text" );
    }
    const clear = () =>{
        let newtext =("");
        settextArea(newtext);
    }
    const capitalfirst = () =>{
       let newtext = textArea.split(" ");
       for(let i=0; i< newtext.length; i++){
        newtext[i] = newtext[i].charAt(0).toUpperCase() + newtext[i].slice(1);
        let newtext1 = newtext.join(" ");
        settextArea(newtext1);
       }
       settextArea(newtext);
    }


  return (
    <>
      <div className="container" style={{backgroundColor: "white"}}>
        <div className=" mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
        <button type="button" className="btn btn-primary" style={{marginRight: "1rem", marginBottom: "1rem"}}>Sine in</button>
        <button type="button" className="btn btn-primary"style={{ marginBottom: "1rem"}}>Log in</button>

          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            onChange={handleOnchange}
           
            value={textArea}
          ></textarea>
        
        <button type="button" className="btn btn-primary" style={{marginRight: "1rem", marginTop: "1rem"}} onClick={handleUpperCase}>To Upper case</button>
        <button type="button" className="btn btn-primary" style={{marginRight: "1rem", marginTop: "1rem"}} onClick={handleLoverCase}>To Lover Case</button>
        <button type="button" className="btn btn-primary" style={{marginRight: "1rem", marginTop: "1rem"}} onClick={removeSpace}>Remove Space</button>
        <button type="button" className="btn btn-primary" style={{marginRight: "1rem", marginTop: "1rem"}} onClick={copyText}>Copy Text</button>
        <button type="button" className="btn btn-primary" style={{marginRight: "1rem", marginTop: "1rem"}} onClick={clear}>Clear</button>
        <button type="button" className="btn btn-primary" style={{marginRight: "1rem", marginTop: "1rem"}} onClick={capitalfirst}>First capital</button>

        </div>
        <h2>preview hear</h2>
      </div>
    </>
  );
}
