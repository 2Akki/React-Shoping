
import React from "react";
import {useFormik} from "formik"
import * as yup from "yup";


 function YupDemoComponent() {
    const formik = useFormik({
        initialValues: {
            Name:"",
            Email:"",
            Age:0,
        },
        validationSchema:yup.object({
            Name:yup.string().required("User Name Reqired").min(4,"Name to short").max(10,"name to long"),
            Email:yup.string().required("User Email Reqired").email("invalid Email"),
            Age:yup.number().required("Age Reqired"),
            
        }),
        onSubmit: values => {
            alert(JSON.stringify(values))
        }

    }) 
  return (
    <div className="container-fluid">
        <form  onSubmit={formik.handleSubmit}>
           <h2>Registration Form</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"  {...formik.getFieldProps("Name")} /></dd>
               <dd className ="text-danger">
                   {(formik.touched.Name&& formik.errors.Name?formik.errors.Name:null)}
                   </dd>


                <dt>Email</dt>
                <dd><input type="text"  {...formik.getFieldProps("Email")} /></dd>
                <dd className ="text-danger">
                {(formik.touched.Email&& formik.errors.Email?formik.errors.Email:null)}
                    </dd>



                <dt>Age</dt>
                <dd><input type="text" {...formik.getFieldProps("Age")} /></dd>
                <dd className ="text-danger">
                {(formik.touched.Age&& formik.errors.Age?formik.errors.Age:null)}
                    </dd>
            </dl>
            <button  className="btn btn-primary">Regsiter</button>
           </form>
    </div>
  );
}



export default YupDemoComponent