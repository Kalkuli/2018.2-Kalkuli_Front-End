import React from 'react'
import './ReceiptList.scss'
import Receipt from '../../UI/Receipt/Receipt'
import ReceiptView from '../ReceiptView/ReceiptView'
import Backdrop from '../../UI/BackDrop/BackDrop'
import receiptInput from '../../../helpers/receiptInputs'

class ReceiptList extends React.Component {

	state = {
		showModal: false,
		selectedReceipt: null,
		selectedReceiptId: null
	}

	render() {
		let receiptView = null
		if (this.state.selectedReceipt) {
			receiptView = <ReceiptView 	onClosePopup={this.onClosePopup} 
																	receipt={this.state.selectedReceipt}
																	receiptId={this.state.selectedReceiptId}
																	onGetAllReceipts={this.props.onGetAllReceipts} />
		}

		let receipts = JSON.parse(JSON.stringify(this.props.receipts))
		return (
			<div className='container-receipts'>
				<Backdrop show={this.state.showModal} click={this.onClosePopup} />
				{receiptView}

				{receipts.map(receipt => {
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
									if(data === 'title' || data === 'description')
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
							</div>
						</Receipt>
				)})}
			</div>
		)
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

export default ReceiptList

