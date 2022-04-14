import React from 'react'
import {useFormik} from "formik"


function ValidateUSER(userDetails) {
    const errors ={}
        if(userDetails.Name == ""){
            errors.Name ="User Name reqired"
        }else if(userDetails.Name.length <4){
            errors.Name ="User Name to short"
        }else if(userDetails.Name.length >10){
            errors.Name ="User Name should only consist of 10 leters"
        }
        if(userDetails.Email == ""){
            errors.Email ="Email reqired"
        }else if(userDetails.Email.indexOf("@")<=2){
            errors.Email ="Invalid Email"
        }
        if(userDetails.Number == ""){
            errors.Number ="Number Required"
        }else if(userDetails.Number.match(/\+91[0-9]{10}/)){
            errors.Number = ""
        }
        else{
            errors.Number = "Invalid Number"
        }
    
    


    return errors
}



export default function ValidationDemoComponent() {
    const formik = useFormik({
        initialValues: {
            Name:"",
            Email:"",
            Number:"",
        },
        validate:ValidateUSER,
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })
    return (
        <div className="container-fluid">
           <form onSubmit={formik.handleSubmit}>
           <h2>Registration Form</h2>
            <dl>
                <dt>Usre Name</dt>
                <dd><input type="text" onBlur ={formik.handleBlur} onChange={formik.handleChange} name="Name"></input></dd>
                <dd>{formik.errors.Name}</dd>
                <dt>Usre Email</dt>
                <dd><input type="text" onBlur ={formik.handleBlur}  onChange={formik.handleChange}  name="Email"></input></dd>
                <dd>{formik.errors.Email}</dd>
                <dt>User Number</dt>
                <dd><input type="text" onBlur ={formik.handleBlur} onChange={formik.handleChange} name ="Number"></input></dd>
                <dd>{formik.errors.Number}</dd>
            </dl>
            <button  className="btn btn-primary">Regsiter</button>
           </form>
        </div>
    )
}
