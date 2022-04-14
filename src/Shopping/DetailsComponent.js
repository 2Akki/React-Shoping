import React from 'react'
import { Link, useParams,useRouteMatch } from 'react-router-dom'
export default function DetailsComponent() {
    const {path,url} =useRouteMatch()
    const{id,name,price}=useParams()
    return (
        <div>
            <h2>Details</h2>
            <dl>
                <dt>id</dt>
                <dd>{id}</dd>
                <dt>Name</dt>
                <dd>{name}</dd>
                <dt>Price</dt>
                <dd>{price}</dd>
                <Link to={`${path}/stock`}>New link</Link>
            </dl>
        </div>
    )
}
