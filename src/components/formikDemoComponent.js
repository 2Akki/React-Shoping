import React from 'react'
import {useFormik} from "formik"

export default function formikDemoComponent() {
    const formik = useFormik({
        initialValues: {
            Name:"",
            Price:0,
            ShipedTo:"",
            Stock:false
        },
    })
    return (
        <div className="container-fluid">
        <form onSubmit={submitClick}>
        <dl>
  
          <dt>Name</dt>
  
          <dd>
            <input type="text" value={formik.values.Name} onChange ={formik.handleChange}></input>
          </dd>
  
          <dt>Price</dt>
  
          <dd>
            <input type="text" value={formik.values.Price} onChange={formik.handleChange} ></input>
          </dd>
  
          <dt>Shiped to</dt>
  
          <dd>
            <select onChange ={(event) =>{setShipedTo(formik.handleChange)}} >
                
              <option value = "Dehli">Dehli</option>
              <option value = "New Dehli">New Dehli</option>
             
            </select>
  
            <dt>Stock</dt>
  
            <dd className="form-switch">
  
  
              <input type="checkbox" checked ={formik.values.Stock} onChange ={formik.handleChange}></input>
  
  
              Avalible
            </dd>
          </dd>
        </dl>
      <button type ="submit" name ="register">Register</button>
      <button type ="submit" name ="post">Post</button>
        </form>
      </div>
    )
}
