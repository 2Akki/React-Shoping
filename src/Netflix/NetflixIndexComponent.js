import React, {useState} from "react";
import "./NetflixIndex.css"  
import NetflixMainCompnent from "./NetflixMainCompnent"; 
import NetflixHeaderComponent from"./NetflixHeaderComponent"


function NetflixIndexComponent(){
return (
    <div className="backImage" style ={{backgroundColor:"black",width:"100%"}}>
        <div className="backColor">
            <div>
         <NetflixHeaderComponent/>
         </div>   
        <NetflixMainCompnent></NetflixMainCompnent>
            
       
        
        </div>
    </div>
) 

}

export default NetflixIndexComponent