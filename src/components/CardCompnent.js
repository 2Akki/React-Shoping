import React,{ useState} from "react";

function CardComponent(props) {
    return (
        <div className ="card w-25 m-2">
            <img src ={props.Photo}alt ="Preview" height="200" className="card-img-top"></img>
            <div className="card-header">
                <h2>{props.Name}</h2>
                <p>{props.Price}</p>
            </div>
            <div className="card-footer">
            <button className="btn btn-danger w-100">
                <span className ="bi bi-cart4"></span>
            </button>
            </div>
        </div>
    )
}

export default CardComponent