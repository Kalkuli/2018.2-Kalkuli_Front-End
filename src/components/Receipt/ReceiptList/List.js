import React from 'react'
import './ReceiptList.scss'
import Receipt from '../../UI/Receipt/Receipt'
import ReceiptView from '../ReceiptView/ReceiptView'
import Backdrop from '../../UI/BackDrop/BackDrop'

class ReceiptList extends React.Component {

	state = {
		showModal: false
	}

	render() {

		return (
			<div className='container-receipts'>
				<Backdrop show={this.state.showModal} click={this.onClosePopup} />

				{this.state.showModal ? <ReceiptView onClosePopup={this.onClosePopup} /> : null}

				{this.props.receipts.map(receipt => {
					console.log(this.props.receipts)
					return <div key={receipt.id}>
						<Receipt size="small" onClickHandler={this.onOpenPopup}>
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
								</div>
							</div>
						</Receipt>

					</div>
				})}
			</div>
		)
	}

	onOpenPopup = () => { this.setState({ showModal: true }) }
	onClosePopup = () => { this.setState({ showModal: false }) }
}

export default ReceiptList


