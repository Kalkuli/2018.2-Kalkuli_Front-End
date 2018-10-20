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
				touched: false,
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
				touched: false,
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
				touched: false,
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
				touched: false,
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
				touched: false,
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
				touched: false,
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
				touched: false,
				validation: {
					required: true,
					minLength: 5,
					maxLength: 10
				}
			}
		},
		receiptIsValid: false
	}

	componentDidMount() {
		this.setState({ receipt: this.props.fileExtracted })
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
													valid={receiptInput[key].valid}
													touched={receiptInput[key].touched}
													onChangeHandler={(event) => this.onChangeHandler(event, key)}
													onClickHandler={() => this.onClickHandler(key)}
													editable={receiptInput[key].editable} />
								</div>
							))}
						</div>
					</Receipt>
				</div>
				
				<div className="compare-area__buttons">
					<BaseButton type="no-background" click={this.props.onCancelHandler}>Cancelar</BaseButton>
					<BaseButton type={this.state.receiptIsValid ? "confirm" : "disable"} 
											click={this.onConfirmHandler}>Confirmar</BaseButton>
				</div>
			</div>
		)
	}

	onConfirmHandler = () => {
		//this.state.receipt.tax_value = parseFloat(this.state.receipt.tax_value)
		this.props.onConfirmButton(this.state.receipt)
	}

	onClickHandler = (inputKey) => {
		let inputState = {...this.state.receiptInput}
		let inputElement = {...inputState[inputKey]}
		inputElement.editable = !inputElement.editable
		inputElement.touched = false
		inputState[inputKey] = inputElement
		this.setState({receiptInput: inputState})
	}

	onChangeHandler = (event, inputKey) => {
		let inputState = {...this.state.receiptInput}
		let inputElement = {...inputState[inputKey]}
		inputElement.value = event.target.value
		inputElement.valid = this.checkValidity(inputElement.value, inputElement.validation)
		inputElement.touched = true
		inputState[inputKey] = inputElement

		let receiptIsValid = true
		for(let inputKey in inputState) {
			receiptIsValid = inputState[inputKey].valid && receiptIsValid
		}

		this.setState({receiptInput: inputState, receiptIsValid: receiptIsValid})
	}

	checkValidity = (value, rules) => {
		let isValid = false
		if(rules.required)
			isValid = value.trim() !== ''
		
		if(rules.minLength)
			isValid = value.length >= rules.minLength

		return isValid
	}
}

const mapStateToProps = state => {
	return {
		filePDF: state.filePDF,
		fileExtracted: state.fileExtracted
	}
}

export default connect(mapStateToProps)(ReceiptCompare)