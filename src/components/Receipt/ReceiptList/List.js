import React, {Component, Fragment} from 'react'
import './ReceiptList.scss'
import Receipt from '../../UI/Receipt/Receipt'
import ReceiptView from '../ReceiptView/ReceiptView'
import Backdrop from '../../UI/BackDrop/BackDrop'
import receiptInput from '../../../helpers/receiptInputs'
import SavedTagItem from '../../UI/TagItem/SavedTagItem/SavedTagItem'
import * as actionTypes from '../../../store/actions/actions'
import { connect } from 'react-redux'
import Confirmation from '../../UI/Confirmation/Confirmation'

export class List extends Component {


	state = {
		showModal: false,
		selectedReceipt: null,
		selectedReceiptId: null,
		ConfirmationDone: false,
		ConfirmationError: false,
	}

	render() {
		let done = this.editConfirmationDone()
		let error = this.editConfirmationError()
		let receiptView = null
		if (this.state.selectedReceipt) {
			receiptView = <ReceiptView 	onClosePopup={this.onClosePopup} 
																	receipt={this.state.selectedReceipt}
																	receiptId={this.state.selectedReceiptId}
																	onGetAllReceipts={this.props.onGetAllReceipts} 
																	tagName={this.getTagName(this.state.selectedReceipt.tag_id)}
																	tagColor={this.getTagColor(this.state.selectedReceipt.tag_id)}
																	error={this.ConfirmationError}
																	done={this.ConfirmationDone}/>
		}
		
		let filteredReceipts = this.filterReceipts(this.props.receipts) 
		let receipts = JSON.parse(JSON.stringify(filteredReceipts))
		
		return (
			<div className='container-receipts'>
				<Backdrop show={this.state.showModal} click={this.onClosePopup} />
				{receiptView}
				{this.state.ConfirmationDone ? done : null}
				{this.state.ConfirmationError ? error : null}
				{receipts ? receipts.map(receipt => {
					let receiptId = receipt.id
					delete receipt.id
					delete receipt.company_id
					return (
						<Receipt key={+receiptId} size="small" onClickHandler={this.onOpenPopup.bind(this, [receipt, receiptId])}>
							<div className='container-receipts__receipt-data '>
								<div key={"title"} className="data">
										<p className="data__input receipt-font"><b>{receiptInput["title"].name}:</b></p>
										<p className="data__input receipt-font">{receipt["title"]}</p>
								</div>	
								{this.props.isSmall ? null :
									Object.keys(receipt).map(data => {
									if(data === 'title' || data === 'description' || data === 'tag_id')
										return null
									return (
										<div key={data} className="data">
											<p className="data__input receipt-font"><b>{receiptInput[data].name}:</b></p>
											<p className="data__input receipt-font">{receipt[data]}</p>
										</div>	
								)})}
								<div key={"description"} className="data">
										<p className="data__input receipt-font"><b>{receiptInput["description"].name}:</b></p>
										<p className="data__input receipt-font">{receipt["description"]}</p>
								</div>	
								<SavedTagItem size={this.props.isSmall ? "small" : null} name={this.getTagName(receipt.tag_id)} color={this.getTagColor(receipt.tag_id)}/>
							</div>
						</Receipt>
				)}): null}
			</div>
		)
	}
	ConfirmationDone = ()=>{
		this.setState({ConfirmationDone: true})
	}

	ConfirmationDoneClose = ()=>{
		this.setState({ConfirmationDone: false})
	}

	editConfirmationDone = () => {
		return (
			<Fragment>
				<Confirmation content='Sua nota foi editada com sucesso!' valid='done' onConfirmOk={this.ConfirmationDoneClose}/>
				<Backdrop show={this.state.ConfirmationDone} click={this.ConfirmationDoneClose} /> 
			</Fragment>
	)
}

ConfirmationError = ()=>{
	this.setState({ConfirmationError: true})
}

ConfirmationErrorClose = ()=>{
	this.setState({ConfirmationError: false})
}

editConfirmationError = () => {
	return (
		<Fragment>
			<Confirmation content='Houve edição indevida na sua nota!' valid='error' onConfirmOk={this.ConfirmationErrorClose}/>
			<Backdrop show={this.state.ConfirmationError} click={this.ConfirmationErrorClose} /> 
		</Fragment>
)
}

	filterReceipts = (receipts) => {
		if(receipts){
			let filteredReceipts = receipts.filter((receipt) => {
				if(receipt.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1)
						return receipt.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
				else
						return receipt.description.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
			})
			return filteredReceipts
		}
	}

	getTagName = (tagId) => { 
		if(!(this.props.tags === undefined || this.props.tags.length === 0)){
			for(let i = 0; i < this.props.tags.length; i++){
				if(this.props.tags[i].id === tagId){
					return this.props.tags[i].category
				}
			}
		}
		else
			return 'carregando...'
	}

	getTagColor = (tagId) => { 
		if(!(this.props.tags === undefined || this.props.tags.length === 0)){
			for(let i = 0; i < this.props.tags.length; i++){
				if(this.props.tags[i].id === tagId){
					return this.props.tags[i].color
				}
			}
		}
		else
			return '#424242'
	}
	onOpenPopup = (receipt) => {
		this.setState({
			showModal: true,
			selectedReceipt: receipt[0],
			selectedReceiptId: receipt[1]
		})
	}
	onClosePopup = () => {
		this.setState({
			showModal: false,
			selectedReceipt: null,
		})
	}
}
export const mapStateToProps = state => {
	return {
		tags: state.tags,
		receipts: state.receipts
	}
}
export const mapDispatchToProps = dispatch => {
    return {
        onReceiptsAdded: (receipts) => {dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts})},
        onTagsAdded: (tags) => dispatch({ type: actionTypes.ADD_TAGS, tags: tags }) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
