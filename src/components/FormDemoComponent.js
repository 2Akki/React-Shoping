import React,{ useState} from "react";

export default function FormDemoComponent() {

    const [Name,setName]= useState("") 
    const [Price,setPrice]= useState(0) 
    const [ShipedTo,setShipedTo]= useState("") 
    const [Stock,setStock]= useState(false) 
    const [HandleRegisterClick,setHandleRegisterClick]= useState("") 
    
    function submitClick(event) {
        // // event.preventDefault();
        // for(var property in event){
        //     console.log(property);
        // }
        // document.write
        // (`
        // {
            // <br>Name:${Name}
            // <br> Price:${Price}
            // £<br> City:${ShipedTo}
            // <br> Stock:${(Stock)?"Avalible":"Out of Stock"}
            // <br>
        // }
        // `
        // )
        // alert(event.target.name)
        if(event.target.elements.register){
            document.write(`{<br>Name:${Name}<br> Price:${Price}£<br> City:${ShipedTo}<br> Stock:${(Stock)?"Avalible":"Out of Stock"}<br>}` )
        }if (event.target.elements.post){
            document.write("...")
        }

    }
   
  return (
    <div className="container-fluid">
      <form onSubmit={submitClick}>
      <dl>

        <dt>Name</dt>

        <dd>
          <input type="text" value={Name} onChange ={(event) =>{setName(event.target.value);}}></input>
        </dd>

        <dt>Price</dt>

        <dd>
          <input type="text" value={Price} onChange ={(event) =>{setPrice(event.target.value)}}></input>
        </dd>

        <dt>Shiped to</dt>

        <dd>
          <select onChange ={(event) =>{setShipedTo(event.target.value)}} >
              
            <option value = "Dehli">Dehli</option>
            <option value = "New Dehli">New Dehli</option>
           
          </select>

          <dt>Stock</dt>

          <dd className="form-switch">


            <input type="checkbox" checked ={Stock} onChange ={(event) =>{setStock(event.target.value)}}className="form-check-input"></input>{" "}


            Avalible
          </dd>
        </dd>
      </dl>
    <button type ="submit" name ="register">Register</button>
    <button type ="submit" name ="post">Post</button>
      </form>
    </div>
  );
}



