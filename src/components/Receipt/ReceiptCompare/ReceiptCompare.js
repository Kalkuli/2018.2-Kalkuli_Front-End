import React from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'
import Products from '../../UI/Products/Products'

const ReceiptCompare = () => {

    var fakeData = {
        "receipt": {
            "company_id": 123,
            "emission_date": "aaa",
            "emission_place": "aaaaaa",
            "tax_value": 20.20,
            "total_price": 123.12,
            "products": [{
                "id": 123,
                "quantity": 12,
                "unit_price": 13.3
            },
            {
                "id": 1233123,
                "quantity": 12,
                "unit_price": 13.3
            }]
        }
    }

    console.log(fakeData.receipt)

    return(
        <Modal>
            <div className="compare-area">
                <Receipt size="large">
                    <div>
                        <h1>{fakeData.receipt.company_id}</h1>
                        <h1>{fakeData.receipt.emission_date}</h1>
                        <h1>{fakeData.receipt.emission_place}</h1>
                        <h1>{fakeData.receipt.tax_value}</h1>
                        <h1>{fakeData.receipt.total_price}</h1>

                        {fakeData.receipt.products.map(product => (
                            <Products key={product.id} quantity={product.quantity} unit_price={product.unit_price}/>
                        ))}
                    </div>
                </Receipt>
            </div>
        </Modal>
    )
}

export default ReceiptCompare