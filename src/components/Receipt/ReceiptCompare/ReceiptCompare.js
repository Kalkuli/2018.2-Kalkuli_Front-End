import React,{ Component } from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'
import Input from '../../UI/Input/Input'

class ReceiptCompare extends Component {

    render() {

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
                            <Input placeholder={fakeData.receipt.company_id} />
                            <Input placeholder={fakeData.receipt.emission_date} />
                            <Input placeholder={fakeData.receipt.emission_place} />
                            <Input placeholder={fakeData.receipt.tax_value} />
                            <Input placeholder={fakeData.receipt.total_price} />
    
                            {fakeData.receipt.products.map(product => 
                                <Input key={product.id} placeholder={product.unit_price} />
                            )}
                        </div>
                    </Receipt>
                </div>
            </Modal>
        )
    }
}

export default ReceiptCompare