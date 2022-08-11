import React from "react";
import Signup from "./Signup";

export default function Form() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto " style={{ color: "lightgrey" }}>
          <img
            className="img-fluid w-100 "
            src="https://raw.githubusercontent.com/candraKriswinarto/form-validation/main/src/assets/rocket.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
