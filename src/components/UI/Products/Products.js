import React from 'react'

const Products = (props) => {
    return(
        <div>
            <h1>{props.quantity}</h1>
            <h1>{props.unit_price}</h1>
        </div>
    )
}

export default Products