import React from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'
import Products from '../../UI/Products/Products'

const ReceiptCompare = () => {

    var fakeData = [
        {
            "receipt": {
             "company_id": 123,
             "emission_date": "aaa",
             "emission_place": "aaaaaa",
             "tax_value": 20.20,
             "total_price": 123.12,
             "products": [{
               "quantity": 12,
               "unit_price": 13.3
              },
              {
               "quantity": 12,
               "unit_price": 13.3
              }]
             }
           }
    ];

    return(

<Modal>
            <div className="compare-area">
                <Receipt size="large">
                    {fakeData.map((i) => {
                        return(
                            <div>
                                <h1>{i.receipt.company_id}</h1>
                                <h1>{i.receipt.emission_date}</h1>
                                <h1>{i.receipt.emission_place}</h1>
                                <h1>{i.receipt.tax_value}</h1>
                                <h1>{i.receipt.total_price}</h1>

                                {i.receipt.products.map((j) => {
                                    return(
                                        <Products quantity={j.quantity} unit_price={j.unit_price}/>
                                    )
                                })}
                            </div>
                        )
                    })}

                </Receipt>
            </div>
        </Modal>
    )
}

export default ReceiptCompare