import React,{useState} from "react";



function NestedItrationsComponent() {
    
    const [userName, setUsername] = useState("bob")
    function UpdateName(event) {
        setUsername(event.target.value);
    }

    return(
        <>
        <div className = "container-fluid">
            <h2>User details</h2>
            User name: 
            <input type="text" name="userName" value ={userName} onChange ={UpdateName} />
            <div>
                <p>Hello! {userName}</p> 
            </div>
        </div>
        </>
    )
}






export default NestedItrationsComponent


