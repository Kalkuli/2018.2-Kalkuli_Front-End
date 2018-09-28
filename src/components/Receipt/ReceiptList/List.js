import React from 'react'
import './ReceiptList.scss'
import Receipt from '../../UI/Receipt/Receipt'
import Popup from 'reactjs-popup'
import ReceiptView from '../ReceiptView/ReceiptView';

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

	render(){
			return(
				<div className='container-receipts'>
					{dadosNota.map( dados => (
						<Receipt size="small" onClickHandler={this.onClosePopup}>
							<div className='container-receipts__receipt-data receipt-font'>
								<p>{dados.company_id}</p>
								<p>{dados.emission_date}</p>
								<p>{dados.emission_place}</p>
								<p>{dados.tax_value}</p>
							</div>
							{/* <ReceiptView onClosePopup={this.onClosePopup}/> */}
						</Receipt>
					))}
				</div>
			)
		}

		onClosePopup = () =>{
				alert('oi')
		}
}

export default ReceiptList



