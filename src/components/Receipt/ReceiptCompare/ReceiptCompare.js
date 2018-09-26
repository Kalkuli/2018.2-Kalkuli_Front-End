import React, { Component } from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'
import Input from '../../UI/Input/Input'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import axios from 'axios';


class ReceiptCompare extends Component {
	state = {
		receipt: {}
	}

	render() {

		return (
			<Modal>
				<div className="compare-area">
					<div className="compare-area__comparing">
						<object className="compare-area__preview" type="text/html" data="http://validator.w3.org/">
						</object>

						<Receipt size="large">
							<div className="compare-area__content">
								<Input width="large" value={this.state.receipt.cnpj} onChangeHandler={(event) => this.onChangeHandler(event, "company_id")} />
								<Input width="large" value={this.state.receipt.emission_date} onChangeHandler={(event) => this.onChangeHandler(event, "emission_date")} />
								<Input width="large" value={this.state.receipt.emission_place} onChangeHandler={(event) => this.onChangeHandler(event, "emission_place")} />
								<Input width="large" value={this.state.receipt.tax_value} onChangeHandler={(event) => this.onChangeHandler(event, "tax_value")} />
								<Input width="large" value={this.state.receipt.total_price} onChangeHandler={(event) => this.onChangeHandler(event, "total_price")} />

								{this.props.location.state.receipt.products.map(product => (
									<div key={product.id} className="compare-area__content__product">
										<Input width="small" value={product.quantity} onChangeHandler={(event) => this.onChangeHandler(event, product.id, "quantity")} />
										<h1 style={{ marginTop: "10px" }}>. . . . . . . .</h1>
										<Input width="small" value={product.unit_price} onChangeHandler={(event) => this.onChangeHandler(event, product.id, "unit_price")} />
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

	componentDidMount() {
		this.setState({
			receipt: { ...this.props.location.state.receipt }
		})
	}

	onConfirmHandler = () => {
		axios.post('http://172.31.0.1:5008/api/v1/receipt', {
			"receipt": {
				...this.state.receipt,
				company_id: 1,
			}
		})
			.then((response) => {
				console.log(response);
				this.props.history.push('/confirmation')
			})
			.catch((err) => {
				console.log(err);
			});
	}

	onCancelHandler = () => {
		console.log('cancel')
	}

	onChangeHandler = (event, inputID, key) => {
		console.log(this.props);

		const oldData = {
			...this.state.receipt
		}

		if (key) {
			if (key === "unit_price")
				oldData.products[inputID].unit_price = event.target.value
			else
				oldData.products[inputID].quantity = event.target.value
		} else
			oldData[`${inputID}`] = event.target.value

		console.log(oldData)

		this.setState({
			receipt: oldData
		});
	}
}

export default ReceiptCompare