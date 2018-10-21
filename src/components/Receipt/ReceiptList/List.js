import React from 'react'
import './ReceiptList.scss'
import Receipt from '../../UI/Receipt/Receipt'
import ReceiptView from '../ReceiptView/ReceiptView'
import Backdrop from '../../UI/BackDrop/BackDrop'

class ReceiptList extends React.Component {

	state = {
		showModal: false,
		selectedReceipt: null,
	}

	render() {
		let receiptView = null;
		if (this.state.selectedReceipt) {
			receiptView = <ReceiptView 	onClosePopup={this.onClosePopup} 
																	receipt={this.state.selectedReceipt}
																	onGetAllReceipts={this.props.onGetAllReceipts} />
		}

		return (
			<div className='container-receipts'>
				<Backdrop show={this.state.showModal} click={this.onClosePopup} />

				{receiptView}
				{this.props.receipts.map(receipt => (
					<Receipt key={receipt.id} size="small" onClickHandler={this.onOpenPopup.bind(this, receipt)}>
						<div className='container-receipts__receipt-data receipt-font'>
							{Object.keys(receipt).map(data => (
								<div key={data} className="data">
									<p><b>label:</b></p>
									<p>{receipt[data]}</p>
								</div>	
							))}
						</div>
					</Receipt>
				))}
			</div>
		)
	}

	onOpenPopup = (receipt) => {
		this.setState({
			showModal: true,
			selectedReceipt: receipt
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

