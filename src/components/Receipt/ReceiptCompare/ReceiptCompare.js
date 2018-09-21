import React,{ Component } from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'
import Input from '../../UI/Input/Input'

class ReceiptCompare extends Component {

    render() {

        var fakeData = {
            "receipt": {
                "company_id": "00.000.000/0000-00",
                "emission_date": "00/00/0000",
                "emission_place": "Gama",
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
                    "unit_price": 1.22
                }]
            }
        }
    
        console.log(fakeData.receipt)
    
        return(
            <Modal>
                <div className="compare-area">
                    <Receipt size="large">
                        <div className="compare-area__content">
                            <Input width="large" placeholder={fakeData.receipt.company_id} />
                            <Input width="large" placeholder={fakeData.receipt.emission_date} />
                            <Input width="large" placeholder={fakeData.receipt.emission_place} />
                            <Input width="large" placeholder={fakeData.receipt.tax_value} />
                            <Input width="large" placeholder={fakeData.receipt.total_price} />
    
                            {fakeData.receipt.products.map(product => (
                                <div key={product.id} className="compare-area__content__product">
                                    <Input width="small" placeholder={product.quantity} />    
                                    <h1 style={{marginTop:"10px"}}>. . . . . . . .</h1>
                                    <Input width="small" placeholder={product.unit_price} />
                                </div>    
                            ))}
                        </div>
                    </Receipt>
                </div>
            </Modal>
        )
    }
}

export default ReceiptCompare