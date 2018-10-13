import React, {Component} from 'react'
import './Dashboard.scss'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report';
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import axios from 'axios';
import Loader from '../UI/Loader/Loader'


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
            loading: false,
            startDate: null,
            endDate: null,
            isEndDate: false,
            focusedInput: null,
            date_from: null,
            date_to:null
        }
    }

    render(){
        moment.locale('pt-br')
        return(
            <div className="dashboard">
                <Navbar/>
                <div className="dashboard__content">
                    <div className="dashboard__content__datepicker datepicker">
                        <DateRangePicker 
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDatePlaceholderText="Data Inicial"
                        endDatePlaceholderText="Data Final"
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.onChange({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        isOutsideRange={() => false}
                        hideKeyboardShortcutsPanel = {() => true}
                        />
                    </div>
                    <div className="dashboard__content__report-area">
                        <Report data={info.fakeData.report.receipts}/>
                        {this.state.loading ? <Loader type="loader_reports"/> : <BaseButton size="small" type="confirm" click={this.onConfirmButton}>Salvar Relatório</BaseButton>}
                    </div>
                </div>
            </div>
        )
    }
    onConfirmHandler = () => {
		this.props.history.push('/confirmation')
    }

    onChange = (startDate, endDate) => {
        this.setState(startDate, endDate)
        this.setState({isEndDate: true})
        if(this.state.isEndDate){
            var date_from = startDate.startDate._d
            var date_to = startDate.endDate._d

            this.setState({
                date_from: date_from,
                date_to: date_to
            })
            
            axios.post('https://172.25.0.1:5008/api/v1/report', {  //rota que recebe duas datas e retorna um json report, q possui notas e a soma dos valores
                "period": {
                    start_date: this.state.date_from,
                    end_date: this.state.date_to
                }
            })
            .then(
                this.setState({isEndDate: false})
            )
            .catch((error) => {
                console.log(error)
            })
        }
    }
    

    onConfirmButton = (receipt) => {
        this.setState({
            loading: true
        })
        axios.post('https://172.25.0.1:5008/api/v1/save_report', {  //adicionar rota que receba duas datas, faça a soma do valor total da report e salve as datas e a soma no banco
                "period": {
                    start_date: this.state.date_from,
                    end_date: this.state.date_to
                }
        })
        .then(() => {
          this.setState({
            loading: false
          })
        })
        .catch((error) => {
          console.log(error)
        })
      }

}

export default Dashboard