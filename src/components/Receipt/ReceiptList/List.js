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
			receiptView = <ReceiptView onClosePopup={this.onClosePopup} receipt={this.state.selectedReceipt} />
		}

		return (
			<div className='container-receipts'>
				<Backdrop show={this.state.showModal} click={this.onClosePopup} />

				{receiptView}

				{this.props.receipts.map(receipt => {
					console.log(this.props.receipts)
					return <div key={receipt.id}>
						<Receipt size="small" onClickHandler={() => this.onOpenPopup(receipt)}>
							<div className='container-receipts__receipt-data receipt-font'>
								<div className='dadosNotas'>
									<div className='dados'>
										<p><b>Data:</b></p>
										<p>{receipt.emission_date}</p>
									</div>
									<div className='dados'>
										<p><b>Local:</b></p>
										<p>{receipt.emission_place}</p>
									</div>
									<div className='dados'>
										<p><b>Preço:</b></p>
										<p>{receipt.total_price}</p>
									</div>
									<Receipt size="small" onClickHandler={this.onOpenPopup}>
										<div className='container-receipts__receipt-data receipt-font'>
											<div className='dadosNotas'>
												<div className='dados'>{receipt.emission_date}</div>
												<div className='dados'>{receipt.emission_place}</div>
												<div className='dados'>{receipt.total_price}</div>
											</div>
										</div>
										<div className='dados'>
											<p><b>Preço:</b></p>
											<p>{receipt.total_price}</p>
										</div>
									</div>
								</div>
							</Receipt>
						</div>
					)})}
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


