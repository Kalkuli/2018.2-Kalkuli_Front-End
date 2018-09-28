
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
	}]
class ReceiptList extends React.Component {


	render(){
			return(
				<div className='receipt-all-position'>
					{dadosNota.map( dados => (
						<div className="receipt-distance">
							<Receipt size="small" onClickHandler={this.onClosePopup}>
								<div className='receipt-font'>
									<div className='dadosNotas'>
										<p className='dados'>{dados.company_id}</p>
										<p className='dados'>{dados.emission_date}</p>
										<p className='dados'>{dados.emission_place}</p>
										<p className='dados'>{dados.tax_value}</p>
									</div>
								</div>
							</Receipt>
							{/* <ReceiptView onClosePopup={this.onClosePopup}/> */}
						</div>
					))}
				</div>
			)
		}

		onClosePopup = () =>{
				alert('oi')
		}
}

export default ReceiptList



