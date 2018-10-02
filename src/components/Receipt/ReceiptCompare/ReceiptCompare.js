import React, { Component } from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Modal from '../../UI/Modal/Modal'
import Input from '../../UI/Input/Input'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import axios from 'axios';
import { connect } from 'react-redux'

class ReceiptCompare extends Component {
	state = {
		receipt: {},

		editable: [
			false,
			false,
			false,
			false
		],
	}

	render() {

		let preview = null
		if (this.props.file !== null)
			preview = <embed className="pdf-preview" src={this.props.file} type="application/pdf" width="290px" height="466px" />
		else
			preview = <h1>Nenhum arquivo encontrado</h1>

		return (
			<Modal>
				<div className="compare-area">
					<div className="compare-area__comparing">
						<div className="compare-area__comparing__preview">
							{preview}
						</div>

						<Receipt size="large">
							<div className="compare-area__content">
								<div className="compare-area__content__labels"> 
									<p className="receipt-font compare-area__content__labels__label">CNPJ:</p>
									<Input value={this.state.receipt.cnpj}
										onChangeHandler={(event) => this.onChangeHandler(event, "cnpj")}
										onClickHandler={() => this.onClickHandler("cnpj")}
										editable={this.state.editable[0]} />
								</div>

								<Input value={this.state.receipt.emission_date}
									onChangeHandler={(event) => this.onChangeHandler(event, "emission_date")}
									onClickHandler={() => this.onClickHandler("emission_date")}
									editable={this.state.editable[1]} />

								<Input value={this.state.receipt.emission_place}
									onChangeHandler={(event) => this.onChangeHandler(event, "emission_place")}
									onClickHandler={() => this.onClickHandler("emission_place")}
									editable={this.state.editable[2]} />

								<Input value={this.state.receipt.tax_value}
									onChangeHandler={(event) => this.onChangeHandler(event, "tax_value")}
									onClickHandler={() => this.onClickHandler("tax_value")}
									editable={this.state.editable[3]} />

								<Input value={this.state.receipt.total_price}
									onChangeHandler={(event) => this.onChangeHandler(event, "total_price")}
									onClickHandler={() => this.onClickHandler("total_price")}
									editable={this.state.editable[4]} />

								{/* this.state.fakeData.receipt.products.map(product => (
										<div key={product.id} className="compare-area__content__product">
												<Input width="small" value={product.quantity} onChangeHandler={(event) => this.onChangeHandler(event, product.id, "quantity")}/>    
												<h1 style={{marginTop:"10px"}}>. . . . . . . .</h1>
												<Input width="small" value={product.unit_price} onChangeHandler={(event) => this.onChangeHandler(event, product.id, "unit_price")}/>
										</div>    
								))} */}
							</div>
						</Receipt>

					</div>
					<div className="compare-area__buttons">
						<BaseButton type="no-background" click={this.onCancelHandler}>Cancelar</BaseButton>
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
		axios.post('https://kalkuli-gateway.herokuapp.com/api/v1/receipt', {
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
	onClickHandler = (inputClicked) => {

		let newEditable = [...this.state.editable]
		console.log(inputClicked)

		if (inputClicked === "cnpj")
			newEditable[0] = !newEditable[0]
		else if (inputClicked === "emission_date")
			newEditable[1] = !newEditable[1]
		else if (inputClicked === "emission_place")
			newEditable[2] = !newEditable[2]
		else if (inputClicked === "tax_value")
			newEditable[3] = !newEditable[3]
		else if (inputClicked === "total_price")
			newEditable[4] = !newEditable[4]


		this.setState({ editable: newEditable })
		console.log(newEditable)
	}


	onChangeHandler = (event, inputID, key) => {
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

	onCancelHandler = () => { console.log('cancel') }
}

const mapStateToProps = state => {
	return {
		file: state.fileBLOB
	}
}

export default connect(mapStateToProps)(ReceiptCompare)