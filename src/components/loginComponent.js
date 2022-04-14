import React from "react"
function loginComponent(){
    
   
    return (
        <>
        <div className="d-flex justify-content-center align-items-center"  >
            
            <div className ="border border-2 border-primary rounded rounded-3 p-4">
            <h2><span className="bi bi-person"></span>User Login</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type = "text" className="form-control"></input></dd>
                    <dt>Password</dt>
                    <dd><input type = "password" className="form-control"></input></dd>
                </dl>
                <button className="btn btn-primary w-100">LogiN</button>
            </div>
        </div>
       </>
    )
}



export default loginComponent