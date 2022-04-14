import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import {Button} from"@material-ui/core"
export default function AdminLoginComponent () {
    const[users,setUsers] =useState([])
    const[userDetails,setUserDetails] =useState({UserId:"",Password:""})
    const[errMsg,setErrMsg] = useState("")
    const history = useHistory()
    const [cookie,setCookie] = useCookies(["userid"])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/getadmin").then(   (res) =>{
            setUsers(res.data)
        }) 
    },[])
    function HandleUserId(e){
        setUserDetails({
            UserId:e.target.value,
            Password:userDetails.Password
        })
    
    }
    function HandleUserPasword(e){
        setUserDetails({
            UserId:userDetails.UserId,
            Password:e.target.value
        })
    } 
    function HandleLoginClick(e){
        e.preventDefault()
        for(var user of users){
            if(user.UserId==userDetails.UserId&&user.Password==userDetails.Password){
                setCookie("userid",user.UserId,{path:"/"})
                history.push("/admindashboard")
            }else{
                setErrMsg("Invalid Credtials")
            }
        }
    }  
     return (
        <div>
            <h2>Admin Login</h2>
            <form>
                <dl>
                    <dt >User Id</dt>
                    <dd><input type="text" onChange ={HandleUserId}></input></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={HandleUserPasword}></input></dd>
                </dl>
                {/* <button class="btn btn-primary" onClick={HandleLoginClick} >Bootstrap Login</button> */}
                <Button onClick={HandleLoginClick} color="secondary" variant="contained">Material Login</Button>
                <br/>
                <Link to="/adminregister">New User</Link>
                <h1 className='text-center text-danger '>{errMsg}</h1>
            </form>
        </div>
    )
}
