import React, {Component} from 'react'
import './ReceiptList.scss'
import Receipt from '../../UI/Receipt/Receipt'
import ReceiptView from '../ReceiptView/ReceiptView'
import Backdrop from '../../UI/BackDrop/BackDrop'
import receiptInput from '../../../helpers/receiptInputs'
import SavedTagItem from '../../UI/TagItem/SavedTagItem/SavedTagItem'
import { connect } from 'react-redux'
import { mapDispatchToProps } from './ReceiptList';
export class List extends Component {

	state = {
		showModal: false,
		selectedReceipt: null,
		selectedReceiptId: null,
	}

	render() {
		let receiptView = null
		if (this.state.selectedReceipt) {
			receiptView = <ReceiptView 	onClosePopup={this.onClosePopup} 
																	receipt={this.state.selectedReceipt}
																	receiptId={this.state.selectedReceiptId}
																	onGetAllReceipts={this.props.onGetAllReceipts} 
																	tagName={this.getTagName(this.state.selectedReceipt.tag_id)}
																	tagColor={this.getTagColor(this.state.selectedReceipt.tag_id)}/>
		}

		let filteredReceipts = this.filterReceipts(this.props.receipts) 
		let receipts = JSON.parse(JSON.stringify(filteredReceipts))

		return (
			<div className='container-receipts'>
				<Backdrop show={this.state.showModal} click={this.onClosePopup} />
				{receiptView}

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
								<SavedTagItem size="small" name={this.getTagName(receipt.tag_id)} color={this.getTagColor(receipt.tag_id)}/>
							</div>
						</Receipt>
				)}): null}
			</div>
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
		if(!(this.props.tags === undefined || this.props.tags.length == 0))
			return this.props.tags[tagId - 1].category
		else
			return 'carregando...'
	}

	getTagColor = (tagId) => { 
		if(!(this.props.tags === undefined || this.props.tags.length == 0))
			return this.props.tags[tagId - 1].color 
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
export default connect(mapStateToProps, mapDispatchToProps)(List)
