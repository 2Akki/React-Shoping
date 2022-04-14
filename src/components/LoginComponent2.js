import {useState, useEffect,useContext} from "react"
import {useCookies} from "react-cookie"



import React from 'react'

export default function LoginComponent2() {
    const [cookies, setCookies,removeCookies] = useCookies(["username"])
    const [userDetails,setUserDetails] = useState({
        UserName:"",
        Password:"",
    })



    function handleUserName(event){
        setUserDetails({
            UserName: event.target.value,
            Password:userDetails.Password
        })
    }
    function handlePasword(event){
        setUserDetails({
            UserName: userDetails.UserName,
            Password: event.target.value
        })
    }
    function HndleLoginClick(event){
    setCookies("username",userDetails.UserName,{path:"/",expires:new Date("2021-12-17")})
    alert("Cokkie Craeted")
    }


    useEffect(() =>{
    //     if(cookies.username==undefined){

    //         //Logic for redirection o login page
//
//
//
//
///Logic
// import
// import//
//        
//
//
//
//
    //     }
     })
    function HandleSignOut(){
        removeCookies("username")
    }
    return (
        <div className="container-fluid">
            <h2>User Login -{cookies.username}  <button onClick ={HandleSignOut} className ="btn btn-link">SignOut</button> </h2>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" onChange ={handleUserName}></input></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange ={handlePasword}></input></dd>
                <button onClick ={HndleLoginClick}>Login</button>
            </dl>
           
        </div>
    )
}
