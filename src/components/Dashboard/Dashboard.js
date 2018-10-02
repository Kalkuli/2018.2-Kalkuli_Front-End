import React, {Component} from 'react'
import './Dashboard.scss'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report';
import BaseButton from '../UI/Button/BaseButton/BaseButton'

const info = {
    fakeData: {
        "report": {
            "id": 1,
            "period": "01/09/2018 - 30/09/2018",
            "total_price": '81,92',
            "receipts":[{
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'zz.zzz.zzz/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            },
            {
                date: '27/09/2018',
                cnpj: 'xx.xxx.xxx/xxxx-xx',
                price: '20,48'  
            }], 
        }
    }
}

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <Navbar/>
                <div className="dashboard__report-area">
                    <Report data={info.fakeData.report.receipts}/>
                    <BaseButton size="small" type="confirm" click={this.onConfirmHandler}>Salvar Relatório</BaseButton>
                </div>
            </div>
        )
    }
    onConfirmHandler = () => {
		this.props.history.push('/confirmation')
	}
}

export default Dashboard