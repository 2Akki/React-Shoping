import React, { useState } from "react";

function StyleBindingComponent() {

    const [backColor,setBackColor] = useState()
    const [textColor,setTextColor] = useState()
    const [alignment,setAlignment] = useState()
    function HandleBackground(event){
       
        setBackColor( event.target.value)
    }
    function HandleTextColor(event){
        setTextColor(event.target.value)
    }
    function HandleAlignment(event){
        setAlignment( event.target.value)
    }
  return (
    <div className="container-fluid">
      <h3>Select Styles</h3>
      <dl>
        <dt>Background Coler</dt>
        <dd>
          <select onChange={HandleBackground}>
            <option value ="Black">Black</option>
            <option value ="Red">Red</option>
            <option value ="Yellow">Yellow</option>
          </select>
        </dd>
        <dt>Text Coler</dt>
        <dd>
          <select onChange ={HandleTextColor}>
            <option value ="White">White</option>
            <option value ="Green">Green</option>
            <option value ="Yellow">Yellow</option>
          </select>
        </dd>
        <dt>Alignment</dt>
        <dd>
            <input onChange ={HandleAlignment} type ="radio" name ="align" value ="Left"/>Left
            <input onChange ={HandleAlignment} type ="radio"  name ="align" value ="Center"/>Center
            <input onChange ={HandleAlignment} type ="radio" name ="align" value ="Right"/>Right
        </dd> 
      </dl>
      <h1 style ={{backgroundColor:backColor,color:textColor,textAlign:alignment}}>Style Binding in React</h1>
    </div>
  );
}

export default StyleBindingComponent;
