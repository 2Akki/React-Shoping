import React from 'react'
import PropTypes  from 'prop-types'
export default function TypeDemoComponent(props) {
    return (
        <div>
            <dl>
                <dt>Name</dt>
                <dd>{props.Name}</dd>
                <dt>Price</dt>
                <dd>{props.Price}</dd>
            </dl>
        </div>
    )
}

TypeDemoComponent.propTypes ={
    Name:PropTypes.string,
    Price:PropTypes.number,
}


export  function ProductIndexComponent() {
    return (
        <div>
         <TypeDemoComponent Name='Samsung Tv' Price={6943.49}></TypeDemoComponent>   
        </div>
    )
}
