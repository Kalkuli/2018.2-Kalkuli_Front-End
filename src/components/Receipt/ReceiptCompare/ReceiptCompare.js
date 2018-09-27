import React,{ Component } from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'
import Input from '../../UI/Input/Input'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'

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
					"id": 0,
					"quantity": 5,
					"unit_price": 13.3
				},
				{
					"id": 1,
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
					<div className="compare-area__comparing">
						<object className="compare-area__preview" type="text/html" data="http://validator.w3.org/">
						</object>

						<Receipt size="large">
							<div className="compare-area__content">
								<Input width="large" value={this.state.fakeData.receipt.company_id} onChangeHandler={(event) => this.onChangeHandler(event, "company_id")}/>
								<Input width="large" value={this.state.fakeData.receipt.emission_date} onChangeHandler={(event) => this.onChangeHandler(event, "emission_date")}/>
								<Input width="large" value={this.state.fakeData.receipt.emission_place} onChangeHandler={(event) => this.onChangeHandler(event, "emission_place")}/>
								<Input width="large" value={this.state.fakeData.receipt.tax_value} onChangeHandler={(event) => this.onChangeHandler(event, "tax_value")}/>
								<Input width="large" value={this.state.fakeData.receipt.total_price} onChangeHandler={(event) => this.onChangeHandler(event, "total_price")}/>

								{this.state.fakeData.receipt.products.map(product => (
										<div key={product.id} className="compare-area__content__product">
												<Input width="small" value={product.quantity} onChangeHandler={(event) => this.onChangeHandler(event, product.id, "quantity")}/>    
												<h1 style={{marginTop:"10px"}}>. . . . . . . .</h1>
												<Input width="small" value={product.unit_price} onChangeHandler={(event) => this.onChangeHandler(event, product.id, "unit_price")}/>
										</div>    
								))}
							</div>
						</Receipt>

					</div>
					<div className="compare-area__buttons">
						<BaseButton type="cancel" click={this.onCancelHandler}>Cancelar</BaseButton>
						<BaseButton type="confirm" click={this.onConfirmHandler}>Confirmar</BaseButton>
					</div>
				</div>
			</Modal>
		)
	}

	onConfirmHandler = () => {
		this.props.history.push('/confirmation')
	}

	onCancelHandler = () => {
		console.log('cancel')
	}

	onChangeHandler = (event, inputID, key) => {

		const oldData = {
			...this.state.fakeData,
		}

		if(key){
			if(key === "unit_price")
				oldData.receipt.products[inputID].unit_price = event.target.value
			else
				oldData.receipt.products[inputID].quantity = event.target.value
		}else
			oldData.receipt[`${inputID}`] = event.target.value

		console.log(oldData.receipt)
		this.setState({fakeData: oldData})
	}
}

export default ReceiptCompare