import React from 'react'

const Products = (props) => {
    return(
        <div>
            <h1  className="receipt-font">{props.quantity}</h1>
            <h1  className="receipt-font">{props.unit_price}</h1>
        </div>
    )
}

export default Products