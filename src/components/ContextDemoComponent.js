import React, { useContext, useState } from "react";

var userDetailsContext = React.createContext(null);

function ContextDemoComponent() {
    const [userDetails,setUserDetails] =useState({
        UserName:"",
        Email:"",
    })
    const [CopyUserDetails,CopySetUserDetails] =useState({
        UserName:"",
        Email:"",
    })

    function handleUserName(event) {
        CopySetUserDetails({
            UserName:event.target.value,
            Email:CopyUserDetails.Email
        })
    }
    function handleEmail(event) {
        CopySetUserDetails({
            UserName:CopyUserDetails.UserName,
            Email:event.target.value,
        })
    }
    function HandleLoginClick(event) {
        setUserDetails({
            UserName:CopyUserDetails.UserName,
            Email:CopyUserDetails.Email
        })
        
    }
    function HomeClick(event) {
        alert(event.target.username)
    }
  return (
    <userDetailsContext.Provider value={userDetails}>
      <div className="container-fluid" style={{"height":"800px","backgroundColor":"lightyellow"}}>
          <h1>User Login</h1>
          <dl>
              <dt>User Name</dt>
              <dd><input type="text" onChange={handleUserName}/></dd>
              <dt>Email</dt>
              <dd><input type="email" onChange = {handleEmail}/></dd>
          </dl>
          <button className="btn btn-primary" onClick={HandleLoginClick}>Login</button>
         
        <h2>Main Component</h2>
        <HomeComponent ></HomeComponent>
      </div>
    </userDetailsContext.Provider>
  );
}


 function HomeComponent(props) {
     const [userDetails,setUserDetails] =useState(userDetailsContext)
    function HandleUpdate(){
        setUserDetails({
           UserName:"tom",
           Email:"tom@example.com"
       })
    }
  
  
     return (
    <div className="bg bg-danger text-white p-2 " >
      <h1>Home Component - {userDetails.UserName} </h1>
      <button onClick={HandleUpdate}>Update Name</button>
      <NavbarComponent > </NavbarComponent>
    </div>
  )
}

export default ContextDemoComponent;



function NavbarComponent(){
    var UserDetails =useContext(userDetailsContext)
    return(
        <div>

            
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark " >
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  <div className="btn-group" style ={{"fontSize":"20px"}}>-{ UserDetails.Email}</div> 
</nav>
        </div>
    )
}
