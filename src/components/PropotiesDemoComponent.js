import React,{useState} from 'react';
import CardComponent from "./CardCompnent"

 function PropotiesDemoComponent(){
     const [products] = useState([{Name:"Baki",Price:2222,Photo:"images/baki.jpg"},{Name:"random",Price:222312,Photo:"images/item-1.jpg"}])
    return(
        <div className="container-fluid">
            <h3>Products Catalog</h3>
            <div className="d-flex flex-wrap">
                {
                    products.map(product=>
                        <CardComponent Name={product.Name} Price = {product.Price} Photo = {product.Photo}></CardComponent>
                        )
                }
            </div>
        </div>
    )
}



export default PropotiesDemoComponent