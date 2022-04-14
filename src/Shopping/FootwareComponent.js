import React from "react";
import { useHistory } from "react-router-dom";

export default function FootwareComponent() {
  let history =useHistory()
  function BacktoHome(){
    let pwd ="admin"
    if(pwd=="admin33"){
      history.push("/home")
    }else{
      history.push("/categories")
    }
  }
  return (
    <div className="container-fluid">
      <h2>Anime posters Home</h2>
      <p>Special ofers on Anime and products runing out in 12 hours.</p>
      <img src="images/baki.jpg" width="100" height="100"></img>
      <img src="images/naruto.jpg" width="100" height="100"></img>
      <button onClick={BacktoHome}>Go back</button>
    </div>
  );
}
