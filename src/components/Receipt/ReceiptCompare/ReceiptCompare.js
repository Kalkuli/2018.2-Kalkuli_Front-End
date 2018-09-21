import React,{ Component } from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'
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
}

export default ReceiptCompare