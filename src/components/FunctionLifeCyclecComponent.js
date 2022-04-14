import { useState,useEffect} from "react";


function Success(event){
    useEffect(() =>{
        alert("Success Component mounted")
        return (()=>{
            alert("Success Component Unmounted")
        })
    },[])
    return(
    <h2>Success Component</h2>

    )
} 
function Invalid(event){
    useEffect(() =>{
        alert("Invalid Component mounted")
        return (()=>{
            alert("Invalid Component Unmounted")
        })
    },[])
    return(
       <h1>Invalid Component</h1>
    )
} 



// function CK2(event){
//     useEffect(() =>{
//         if(Ck===true){
//             console.log("nice")
            
//         }else{
//             alert("Invalid Component mounted") 
//         }
//         return (()=>{
//             alert("Invalid Component Unmounted")
//         })
//     },[])
//     return(
//        <h1>Invalid Component</h1>
//     )
// } 
 function FunctionLifeCyclecComponent() {
     const [msg,setMsg] = useState(null)
    
    
    function SuccessClick(event){
        setMsg(<Success></Success>)
    }
    function InvalidClick(event){
        setMsg(<Invalid></Invalid>)
    }

    return (
        <div>
            <ht>Main component</ht>
            <br></br>
            <button onClick={SuccessClick}>Success</button>
            <button onClick={InvalidClick}>Invalid</button>
            <hr></hr>
            {msg}
        </div>
    )
}


export default  FunctionLifeCyclecComponent;