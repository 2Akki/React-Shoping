import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

import React from "react";

export default function FormikValidationComponent() {
  return (
    <div className="container-fluid">
      <h3>Register User</h3>
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          Age: 0,
        }}
        validationSchema={yup.object({
          Name: yup
            .string()
            .required("User Name Reqired")
            .min(4, "Name to short")
            .max(10, "name to long"),
          Email: yup
            .string()
            .required("User Email Reqired")
            .email("Invalid Email"),
          Age: yup.number().required("Age Reqired"),
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {
          props =>(
            <div>
            <Form>
              <dl>
                <dt>User name</dt>
                <dd>
                  <Field type="text" name="Name"></Field>
                </dd>
                <dd className ="text-danger">
                  <ErrorMessage name="Name"></ErrorMessage>
                </dd>
                <dt>Email</dt>
                <dd >
                  <Field type="" name="Email"></Field>
                </dd>
                <dd className ="text-danger">
                  <ErrorMessage name="Email"></ErrorMessage>
                </dd>
                <dt>Age</dt>
                <dd>
                  <Field type="text" name="Age"></Field>
                </dd>
                <dd className ="text-danger">
                  <ErrorMessage name="Age"></ErrorMessage>
                </dd>
                <dt>Select City</dt>
                <dd>
                    <Field as ="select" Name ="City">
                        <option>Hyd</option>
                        <option>Dehli</option>
                    </Field>
                </dd>
              </dl>
              <button disabled={(props.isValid==true)?false:true} >Submit</button>
              <br/>
              Form valid:{(props.isValid ==true)?" Valid":" InVlalid"} <br/> 
              Form Dirty:{(props.dirty ==true)?" Modified":" Not Modified"} <br/>
            </Form>
            </div>
  )
        }
      </Formik>
    </div>
  );
}
