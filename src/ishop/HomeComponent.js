import React from 'react'
import { Link } from 'react-router-dom'


export default function HomeComponent() {
    return (
        <div>
           <h1>Shoping Home</h1> 
           <div>
                 <Link to='/adminlogin' >Admin Login</Link>
              <span>\</span>
               <Link to='/adminregister' >AdmiN register</Link>
           </div>
        </div>
    )
}
