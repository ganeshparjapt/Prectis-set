import React from "react";

export default function Form() {
  return (
    <>
      <div className="container" style={{backgroundColor: "white"}}>
        <div className=" mb-3">
          <label for="exampleFormControlInput1" className="form-label">
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
          ></textarea>
        </div>
      </div>
    </>
  );
}
