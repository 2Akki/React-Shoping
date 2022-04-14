import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useFormik} from "formik"
import { Link, useHistory } from 'react-router-dom'
export default function AdminRegisterComponent() {
    const history = useHistory(

    )
    const [Users,setUsers] = useState([])
    const [msg,setmsg] = useState("")


    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/getadmin').then(res=>{
            setUsers(res.data)
        })
    },[])
    const formik =  useFormik({
        initialValues:{
            UserId:"",
            FirstName:"",
            LastName:"",
            Email:"",        
            Password:"",
        },
        onSubmit:values =>{
            axios.post("http://127.0.0.1:8000/postadmin",values)
            alert("Register Success")
            history.push("/adminlogin")
        
        }
    })
    function verifyUserId(e){
        for(var user of Users){
            if(user.UserId==e.target.value){
            setmsg("User id is taken - try another")
            break;
            }else{
                setmsg("")
            }
           
        }
    }
    return (
        <div  >
        <h2>Admin Register </h2> 
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" name="UserId" onKeyUp={verifyUserId} value={formik.values.UserId} onChange={formik.handleChange}></input></dd>
                <dd className ="text-danger">{msg}</dd>
                <dt>Password</dt>
              <dd><input type ="password" name="Password" onChange={formik.handleChange} value ={formik.values.Password}></input></dd>
                <dt>FirstName</dt>
                <dd><input type ="text" name="FirstName" onChange={formik.handleChange} value={formik.values.FirstName}></input></dd>
                <dt>LastName</dt>
                <dd><input type ="text" name="LastName" onChange={formik.handleChange} value ={formik.values.LastName}></input></dd>
              <dt>Email</dt>
              <dd><input type ="email" name="Email" onChange={formik.handleChange} value ={formik.values.Email}></input></dd>
              
            </dl>
            <button className="btn btn-primary">Register</button>
            <br/>
            <Link to="/adminlogin" >Existing User</Link>
        </form>
        </div>
    )
}
