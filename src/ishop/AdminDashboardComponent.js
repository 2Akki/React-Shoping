import React,{ useState, useEffect} from 'react'
import { useCookies } from 'react-cookie'
import {Link, useHistory} from 'react-router-dom'



export default function AdminDashboardComponent() {
    const[cookies,setCookie,removeCookie] = useCookies("userid")
    const history= useHistory()
    function HandleLogOutClick(e){
        removeCookie("userid");
        history.push("/adminlogin")
    }
    useEffect(() => {
        if(cookies.userid==undefined){
            history.push("/adminlogin")
        }
    },[])
    return (
        <div>
            <h2>Admin Dashboard -{cookies.userid} <button class="btn btn-link" onClick={HandleLogOutClick}>Sign Out</button></h2>
        </div>
    )
}
