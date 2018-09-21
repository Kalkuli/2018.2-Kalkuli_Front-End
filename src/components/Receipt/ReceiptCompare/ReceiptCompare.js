import React,{ Component } from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'
<<<<<<< d5c60df6ec2208651fd10a5bcc51084edded6bd2
import Input from '../../UI/Input/Input'

class ReceiptCompare extends Component {
	
	state = {
		fakeData: {
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
	} 
	render() {

		return(
			<Modal>
				<div className="compare-area">
					<Receipt size="large">
						<div className="compare-area__content">
							<Input width="large" value={this.state.fakeData.receipt.company_id} onChangeHandler={(event) => this.onChangeHandler(event, "company_id")}/>
							<Input width="large" value={this.state.fakeData.receipt.emission_date} onChangeHandler={(event) => this.onChangeHandler(event, "emission_date")}/>
							<Input width="large" value={this.state.fakeData.receipt.emission_place} onChangeHandler={(event) => this.onChangeHandler(event, "emission_place")}/>
							<Input width="large" value={this.state.fakeData.receipt.tax_value} onChangeHandler={(event) => this.onChangeHandler(event, "tax_value")}/>
							<Input width="large" value={this.state.fakeData.receipt.total_price} onChangeHandler={(event) => this.onChangeHandler(event, "total_price")}/>

							{this.state.fakeData.receipt.products.map(product => (
									<div key={product.id} className="compare-area__content__product">
											<Input width="small" value={product.quantity} onChangeHandler={(event) => this.onChangeHandler(event)}/>    
											<h1 style={{marginTop:"10px"}}>. . . . . . . .</h1>
											<Input width="small" value={product.unit_price} onChangeHandler={(event) => this.onChangeHandler(event)}/>
									</div>    
							))}
						</div>
					</Receipt>
				</div>
			</Modal>
		)
	}

	onChangeHandler = (event, inputID) => {

		const oldData = {
			...this.state.fakeData,
		}
		console.log(oldData.receipt[""+inputID+""])
		this.setState({fakeData: oldData})
	}
=======
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
>>>>>>> Add json to Receipt in ReceiptCompare
}

export default ReceiptCompare