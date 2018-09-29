import React from 'react'
import './ReceiptList.scss'
import Receipt from '../../UI/Receipt/Receipt'
import ReceiptView from '../ReceiptView/ReceiptView'
import Backdrop from '../../UI/BackDrop/BackDrop'

const dadosNota = [
	{
    "company_id": "00.000.000/0000-00",
    "emission_date": "00/00/0000",
    "emission_place": "Gama",
    "tax_value": 20.20
	},
	{
    "company_id": "00.000.000/0000-00",
    "emission_date": "00/00/0000",
    "emission_place": "Gama",
    "tax_value": 20.20
	}, 
	{
    "company_id": "00.000.000/0000-00",
    "emission_date": "00/00/0000",
    "emission_place": "Gama",
    "tax_value": 20.20
	},
	{
    "company_id": "00.000.000/0000-00",
    "emission_date": "00/00/0000",
    "emission_place": "Gama",
    "tax_value": 20.20
	},
	{
    "company_id": "00.000.000/0000-00",
    "emission_date": "00/00/0000",
    "emission_place": "Gama",
    "tax_value": 20.20
	}]

class ReceiptList extends React.Component {

	state = {
		showModal: false
	}
	
	render() {
	
		return (
			<div className='container-receipts'>
				<Backdrop show={this.state.showModal} click={this.onClosePopup}/>

				{ this.state.showModal ? <ReceiptView onClosePopup={this.onClosePopup}/> : null }

				{dadosNota.map( dados => (
					<Receipt size="small" onClickHandler={this.onOpenPopup}>
						<div className='container-receipts__receipt-data receipt-font'>
							<p>{dados.company_id}</p>
							<p>{dados.emission_date}</p>
							<p>{dados.emission_place}</p>
							<p>{dados.tax_value}</p>
						</div>
					</Receipt>
				))}
			</div>
		)
	}

	onOpenPopup = () => { this.setState({showModal: true})}
	onClosePopup = () =>{ this.setState({showModal: false})}
}

export default ReceiptList


