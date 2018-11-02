import React, { Component } from 'react'
import './ReceiptCompare.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Input from '../../UI/Input/Input'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import { connect } from 'react-redux'
import receiptInputs from '../../../helpers/receiptInputs'
import DropDown from '../../UI/DropDown/DropDown'
import getAllTags from '../../../services/getAllTags'

export class ReceiptCompare extends Component {
	state = {
		receiptInput: receiptInputs,
		receiptIsValid: false,
		receipt: null,
		showItems: false,
		selectedTag: null,
		items: [
			{id: 1, value: 'Alimentação'},
			{id: 2, value: 'Transporte'}, 
			{id: 3, value: 'Eletrônicos'}
		],
		selectedTag: {},
		tags: [],
	}

	componentDidMount() {
		this.setState({ receipt: this.props.fileExtracted })
		this.initInputs()
		this.fetchTags()
	}
	
	render() {
		let preview = null
		if (this.props.filePDF !== null) {
			preview = <embed className="pdf-preview" src={this.props.filePDF} type="application/pdf" width="290px" height="466px" />
		} else {
			preview = <h1>Nenhum arquivo encontrado</h1>
		}
		let { receiptInput } = this.state
		return (
			<div className="compare-area">
				<div className="compare-area__comparing">
					<div className="compare-area__comparing__preview">
						{preview}
					</div>
					<Receipt size="large">
						<div className="compare-area__content">
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

	fetchTags = async() => {
		const tags = await getAllTags()
		console.log(tags)
		this.setState({ tags })
	}

	onConfirmHandler = () => {
		//this.state.receipt.tax_value = parseFloat(this.state.receipt.tax_value)
		this.props.onConfirmButton(this.state.receipt)
		console.log(this.state.receiptInput)
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
	onDropDownHandler = () => {
		this.setState(prevState => ({ showItems: !prevState.showItems }))
	}

	onSelectedTagHandler = (tag) => { this.setState({	selectedTag: tag, showItems: false }) }

	handleExceptionDropDown = () => {
		let items = null
		if(this.state.tags)
			items = this.state.tags
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
		fileExtracted: state.fileExtracted
	}
}

export default connect(mapStateToProps)(ReceiptCompare)