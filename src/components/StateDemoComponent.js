import React, { useState } from "react";

export default function StateDemoComponent() {
  const [product, setProduct ] = useState({
    Name: "",
    Price: 0,
    City: "",
    Stock: false,
  });
  const [newProduct, setNewProduct] = useState({})
const [theme,setTheme] = useState({})
  function HandleNameChange(event) {
    setProduct({
      Name: event.target.value,
      Price: product.Price,
      City: product.City,
      Stock: product.Stock,
    });
  }
  function HandlePriceChange(event) {
    setProduct({
      Name: product.Name,
      Price: event.target.value,
      City: product.City,
      Stock: product.Stock,
    });
  }
  function HandleCityChange(event) {
    setProduct({
      Name: product.Name,
      Price: product.Price,
      City: event.target.value,
      Stock: product.Stock,
    });
  }
  function HandleStockChange(event) {
    setProduct({
      Name: product.Name,
      Price: product.Price,
      City: product.City,
      Stock: event.target.checked,
    });
  }
  function HandleRegisterClick(event) {
      setNewProduct({
          Name:product.Name,
          Price: product.Price,
          City: product.City,
          Stock: product.Stock,
      })
  }
  function HandleThemeChange(event) {
    if(event.target.checked){
        setTheme({
            backgroundColor: "black",
            color:"white"
        })
    }else{
        setTheme({
            backgroundColor: "white",
            color:"black"
        })
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3" >
            <div style ={theme} className="p-4">
                <div className="form-switch">
                    <input type ="checkbox" className="form-check-input"  onChange ={HandleThemeChange}/>Dark theme
                </div>

            <h3 >Register Product</h3>
            <dl>
              <dt>Name</dt>
              <dd>
                <input
                  type="text"
                  onChange={HandleNameChange}
                  className="form-control"
                ></input>
              </dd>
              <dt>Price</dt>
              <dd>
                <input
                  type="text"
                  onChange={HandlePriceChange}
                  className="form-control"
                ></input>
              </dd>
              <dt>Shipped to</dt>
              <dd>
                <select className="form-select" onChange={HandleCityChange}>
                  <option>Dehli</option>
                  <option>Hyd</option>
                </select>
              </dd>
              <dt>Stock</dt>
              <dd className="form-switch">
                <input
                  onChange={HandleStockChange}
                  type="checkbox"
                  className="form-check-input"
                ></input>{" "}
                Available
              </dd>
            </dl>
            <button className="btn btn-primary w-100" onClick={HandleRegisterClick }>Register</button>
            </div>
          </div>
          <div className="col-9">
            
            
            <h3>Product Details</h3>
            <dl>
              <dt>Name</dt>
              <dd>{newProduct.Name}</dd>
              <dt>Price</dt>
              <dd>{newProduct.Price}</dd>
              <dt>City</dt>
              <dd>{newProduct.City}</dd>
              <dt>Stock</dt>
              <dt>{newProduct.Stock === true ? "Avalible" : "Out ofStock"}</dt>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
