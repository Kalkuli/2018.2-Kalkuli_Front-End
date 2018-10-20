import React, { Component } from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Input from '../../UI/Input/Input'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import { connect } from 'react-redux'

class ReceiptCompare extends Component {
	state = {
		receiptInput: {
			title: {
				name: 'Título',
				value: '',
				type: 'text',
				valid: false,
				editable: false,
				validation: {
					required: true,
					minLength: 5,
					maxLength: 10
				}
			},
			cnpj: {
				name: 'CNPJ',
				value: '',
				type: 'text',
				valid: false,
				editable: false,
				validation: {
					required: true,
					minLength: 5,
					maxLength: 10
				}
			},
			emission_date: {
				name: 'Data',
				value: '',
				type: 'text',
				valid: false,
				editable: false,
				validation: {
					required: true,
					minLength: 5,
					maxLength: 10
				}
			},
			emission_place: {
				name: 'Local',
				value: '',
				type: 'text',
				valid: false,
				editable: false,
				validation: {
					required: true,
					minLength: 5,
					maxLength: 10
				}
			},
			tax_value: {
				name: 'Impostos',
				value: '',
				type: 'text',
				valid: false,
				editable: false,
				validation: {
					required: true,
					minLength: 5,
					maxLength: 10
				}
			},
			total_price: {
				name: 'Total',
				value: '',
				type: 'text',
				valid: false,
				editable: false,
				validation: {
					required: true,
					minLength: 5,
					maxLength: 10
				}
			},
			description: {
				name: 'Descrição',
				value: '',
				type: 'text',
				valid: false,
				editable: false,
				validation: {
					required: true,
					minLength: 5,
					maxLength: 10
				}
			}
		},
		
		receipt: {
			cnpj: "",
			emission_date: "",
			emission_place: "",
			products: [],
			tax_value: 0,
			total_price: 0
		},
		editable: [
			false,
			false,
			false,
			false,
			false
		],
	}

	componentDidMount() {
		//this.setState({ receipt: this.props.fileExtracted })
	}

	render() {
		let preview = null
		if (this.props.filePDF !== null)
			preview = <embed className="pdf-preview" src={this.props.filePDF} type="application/pdf" width="290px" height="466px" />
		else
			preview = <h1>Nenhum arquivo encontrado</h1>

		let {receiptInput} = this.state
		return (
			<div className="compare-area">
				<div className="compare-area__comparing">
					<div className="compare-area__comparing__preview">
						{preview}
					</div>

					<Receipt size="large">
						<div className="compare-area__content">

							{Object.keys(receiptInput).map(key => (
								<div className="compare-area__content__labels"> 
									<p className="receipt-font compare-area__content__labels__label">
										<b>{receiptInput[key].name}:</b>
									</p>
									<Input 	value={receiptInput[key].value}
													onChangeHandler={(event) => this.onChangeHandler(event, "cnpj")}
													onClickHandler={() => this.onClickHandler(key)}
													editable={receiptInput[key].editable} />
								</div>
							))}
								


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
					<BaseButton type="no-background" click={this.props.onCancelHandler}>Cancelar</BaseButton>
					<BaseButton type="confirm" click={this.onConfirmHandler}>Confirmar</BaseButton>
				</div>
			</div>
		)
	}



	onConfirmHandler = () => {
		// let taxValue = this.state.receipt.tax_value
		// let taxValueFloat = parseFloat(taxValue)
		// let newState = {...this.state.receipt, tax_value: taxValueFloat}
		// this.setState({
		// 	receipt: newState
		// })
		// console.log(this.state.receipt)
		this.state.receipt.tax_value = parseFloat(this.state.receipt.tax_value)
		this.props.onConfirmButton(this.state.receipt)
	}

	onClickHandler = (inputKey) => {
		let inputState = {...this.state.receiptInput}
		let inputElement = {...inputState[inputKey]}

		inputElement.editable = !inputElement.editable
		inputState[inputKey] = inputElement
		this.setState({receiptInput: inputState})
		console.log(this.state.receiptInput[inputKey])
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

		this.setState({
			receipt: oldData
		});

	}

}

const mapStateToProps = state => {
	return {
		filePDF: state.filePDF,
		fileExtracted: state.fileExtracted
	}
}

export default connect(mapStateToProps)(ReceiptCompare)