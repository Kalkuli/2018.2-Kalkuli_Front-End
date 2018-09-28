<<<<<<< e1623afceabe202c57c8f7f0da08d564a908413c
<<<<<<< 825325c8f09e218d824aab8c4de058b3f08e8909
=======

>>>>>>> Improve scss and event handling
=======
>>>>>>> Improve receipt list styling
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
<<<<<<< e1623afceabe202c57c8f7f0da08d564a908413c
<<<<<<< 825325c8f09e218d824aab8c4de058b3f08e8909
=======
>>>>>>> Improve receipt list styling
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
<<<<<<< e1623afceabe202c57c8f7f0da08d564a908413c
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
=======
=======
>>>>>>> Improve receipt list styling
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
<<<<<<< e1623afceabe202c57c8f7f0da08d564a908413c
						</div>
>>>>>>> Improve scss and event handling
=======
						</Receipt>
>>>>>>> Improve receipt list styling
					))}
				</div>
			)
		}

		onClosePopup = () =>{
				alert('oi')
		}
}

export default ReceiptList



