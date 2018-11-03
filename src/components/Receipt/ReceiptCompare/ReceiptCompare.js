import React, { Component } from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Input from '../../UI/Input/Input'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import { connect } from 'react-redux'
import receiptInputs from '../../../helpers/receiptInputs'
import DropDown from '../../UI/DropDown/DropDown'
export class ReceiptCompare extends Component {
	state = {
		receiptInput: receiptInputs,
		receiptIsValid: true,
		receipt: null,
		showItems: false,
		selectedTag: null,
		items: [],
		selectedTag: {},
	}

	componentDidMount() {
		this.setState({ receipt: this.props.fileExtracted })
		this.initInputs()
	}
	
	render() {
		let preview = null
		if (this.props.filePDF !== null) {
			preview = <embed className="pdf-preview" src={this.props.filePDF} type="application/pdf" width="290px" height="466px" />
		} else {
			preview = <h1>Nenhum arquivo encontrado</h1>
		}
		return (
			<div className="compare-area">
				<div className="compare-area__comparing">
					<div className="compare-area__comparing__preview">
						{preview}
					</div>
					<Receipt size="large">
						<div className="compare-area__content">
							{this.generateInputs()}
						</div>
						<div className="compare-area__tag-area">
							<div className="compare-area__tag-area__line"></div>
							<p className="receipt-font compare-area__tag-area__title"><b>Categoria</b></p>
							{ this.handleExceptionDropDown() }
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
		let { receiptInput } = this.state
		
		let receipt = {
			"emission_date": receiptInput['emission_date'].value,
			"emission_place": receiptInput['emission_place'].value,
			"tax_value": receiptInput['tax_value'].value,
			"total_price": receiptInput['total_price'].value,
			"title": receiptInput['title'].value,
			"description": receiptInput['description'].value,
			"cnpj": receiptInput['cnpj'].value,
			"products": [],
			"tag_id": this.state.selectedTag.id
		}
		this.props.onConfirmButton(receipt)
	}

	generateInputs = () => {
		let { receiptInput } = this.state
		return (
			<React.Fragment>
			{Object.keys(receiptInput).map(key => (
				<div key={key} className="compare-area__content__labels"> 
					<p className="receipt-font compare-area__content__labels__label">
						<b>{receiptInput[key].name}:</b>
					</p>
					<Input 	value={receiptInput[key].value}
									valid={receiptInput[key].valid}
									touched={receiptInput[key].touched}
									onChangeHandler={(event) => this.onChangeHandler(event, key)}
									onClickHandler={this.onClickHandler.bind(this, key)}
									editable={receiptInput[key].editable} />
				</div>
			))}
			</React.Fragment>
		)
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

	initInputs = () => {
		if(this.props.fileExtracted){
			let inputs = { ...this.state.receiptInput}
			inputs.cnpj.value = this.props.fileExtracted.cnpj
			inputs.emission_date.value = this.props.fileExtracted.emission_date
			inputs.emission_place.value = this.props.fileExtracted.emission_place
			inputs.tax_value.value = this.props.fileExtracted.tax_value
			inputs.total_price.value = this.props.fileExtracted.total_price
			this.setState({receiptInput: inputs})
		}
	}

	onDropDownHandler = () => { this.setState(prevState => ({ showItems: !prevState.showItems })) }

	onSelectedTagHandler = (tag) => { this.setState({	selectedTag: tag, showItems: false }) }

	handleExceptionDropDown = () => {
		let items = null
		if(this.props.tags)
			items = this.props.tags
		else 
			items = [{"id": 0, "category": "erro", "color": "#424242"}]		
		
			return <DropDown 	items={items}
												onDropDownHandler={this.onDropDownHandler}
												onSelectedTagHandler={this.onSelectedTagHandler}
												selectedTag={this.state.selectedTag}
												showItems={this.state.showItems}/>
	}
}
export const mapStateToProps = state => {
	return {
		filePDF: state.filePDF,
		fileExtracted: state.fileExtracted,
		tags: state.tags
	}
}

export default connect(mapStateToProps)(ReceiptCompare)