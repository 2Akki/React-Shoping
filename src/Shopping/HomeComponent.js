import React from 'react'
import {useLocation,useRouteMatch} from 'react-router-dom'
export default function HomeComponent() {
    let location = useLocation()
    const {path,url}=useRouteMatch()
    return (
        <div className="container-fluid">
           <h2>Shoping Home</h2>
           <p>{path}</p>
           <p>{url}</p>
           <p>Special ofers on Electronics and footware runing out in 12 hours.</p> 
        </div>
    )
}
