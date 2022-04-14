import React,{ useState} from 'react'
import { Link } from 'react-router-dom'

export default function CatagoreisComponent() {
    const [categories] = useState(["Electronics","Footwear"])
    return (
        <div className="container-fluid">
            <h2>Catagoreis</h2>
            <ul >
                {
                    categories.map(category=>
                        <li key={category}>
                        <Link to={"products/"+category} >{category}</Link>
                        </li>
                        )
                }
            </ul>
        </div>
    )
}
