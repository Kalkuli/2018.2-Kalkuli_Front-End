import React, {Component} from 'react'
import './Dashboard.scss'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report';
import BaseButton from '../UI/Button/BaseButton/BaseButton'


import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import moment from 'moment'
import 'moment/locale/pt-br'
import './DatePicker.scss'

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
    constructor(props){
        super(props);

        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null
        }
    }

    render(){
        moment.locale('pt-br')
        return(
            <div className="dashboard">
                {console.log(this.state.startDate)}
                <Navbar/>
                <div className="dashboard__content">
                    <div className="dashboard__content__datepicker">
                        <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDatePlaceholderText="Data Inicial"
                        endDatePlaceholderText="Data Final"
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        isOutsideRange={() => false}
                        />
                    </div>
                    <div className="dashboard__content__report-area">
                        <Report data={info.fakeData.report.receipts}/>
                        <BaseButton size="small" type="confirm" click={this.onConfirmHandler}>Salvar Relatório</BaseButton>
                    </div>
                </div>
            </div>
        )
    }
    onConfirmHandler = () => {
		this.props.history.push('/confirmation')
	}
}

export default Dashboard