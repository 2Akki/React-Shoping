import React, { useState } from "react";
import NetflixRegisterCompnent from "./NetflixRegisterComponent";
function NetflixMainCompnent() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "800px", textAlign: "center" }}
    >
      <div>
        <h1>Unlimited films, TV programmes and more.</h1>
        <h3>Watch anywhere. Cancel at any time.</h3>
        
          <NetflixRegisterCompnent />
        
      </div>
    </div>
  );
}

export default NetflixMainCompnent;
