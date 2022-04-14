import React,{ useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductsComponent() {
   
    const [products] =useState([
        {Name:"boat Neck",Price:6790.22,Category:"Electronics"},
        {Name:"heAD Neck",Price:6722.22,Category:"Footwear"},
        {Name:"Nikes",Price:10000.00,Category:"Footwear"},
        {Name:"Computer",Price:245082.43,Category:"Electronics"}
    ])
    const {category} =useParams()
   
    
    return (
        <div>
            <h3>Products List {category}</h3> 
            <ol>
                {
                    products.filter(product=>product.Category ==category).map(item=>
                    <li >{item.Name}</li>
                    )
                        
                        
                }
            </ol>
            <br/>
            <Link to="/categories">Back to categories</Link>
        </div>
    )
            }