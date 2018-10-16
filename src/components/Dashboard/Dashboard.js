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

class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            startDate: null,
            endDate: null,
            isEndDate: false,
            focusedInput: null,
            receipts: null,
            sum: null,
            date_from: null,
            date_to: null
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
                        hideKeyboardShortcutsPanel = {true}
                        />
                    </div>
                    <div className="dashboard__content__report-area">
                        {this.state.receipts ? <Report receipts={this.state.receipts} sum={this.state.sum} /> : <Report receipts={false} sum={false}/>}
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
            var date_from = moment(startDate.startDate).format('YYYY-MM-DD')
            var date_to = moment(startDate.endDate).format('YYYY-MM-DD')   
            
            this.setState({date_from: date_from, date_to: date_to})

            axios.post('http://172.25.0.1:5008/api/v1/report', {  //rota que recebe duas datas e retorna um json report, q possui notas e a soma dos valores
                "period": {
                    date_from: date_from,
                    date_to: date_to
                }
            })
            .then((response) => {
                this.setState({
                    receipts: response.data.receipts,
                    sum: response.data.total_cost,
                    isEndDate: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
    

    onConfirmButton = (receipt) => {
        this.setState({
            loading: true
        })
        axios.post('http://172.25.0.1:5008/api/v1/save_report', {  //adicionar rota que receba duas datas, faça a soma do valor total da report e salve as datas e a soma no banco
                "period": {
                    date_from: this.state.date_from,
                    date_to: this.state.date_to
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