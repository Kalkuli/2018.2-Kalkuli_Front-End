import React, {Component} from 'react'
import './Reports.scss'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report'
import Axios from 'axios'
import {DateRangePicker} from 'react-dates';
import moment from 'moment'
import 'moment/locale/pt-br'

var type = "cancel";

class Reports extends Component {
    
    state = {
        position: null,
        reports: null,
        receipts: null,
        sum: null,
        reportCase: null
    }

    componentDidMount(){
        this.getAllReports()
    }
    
    render() {
        return(
            <div className="reports">
                <Navbar/>
                <div className="reports__area">
                    <div>
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
                            hideKeyboardShortcutsPanel = {() => true}
                            />
                        </div>
                        
                        <div className="reports__area__resumes">
                            {this.state.reports === null ? null : this.state.reports.map((data, index) => {
                                let start = moment(data.date_from + " " + "GMT-0300").format('YYYY-MM-DD')
                                let end = moment(data.date_to + " " + "GMT-0300").format('YYYY-MM-DD')

                                let startDisplayReport = new Date(start + " " + "GMT-0300").toLocaleDateString()
                                let endDisplayReport = new Date(end + " " + "GMT-0300").toLocaleDateString()

                                if(this.state.position === index){
                                    type = "confirm";
                                }
                                else{
                                    type = "cancel";
                                }
                                return(
                                    <BaseButton size="medium" type={type} click={() => {this.onReportSelect(index, start, end)}} >{startDisplayReport + "-" + endDisplayReport}</BaseButton>
                                )
                            })}
                        </div>
                        
                    </div>
                    {this.state.receipts ? <Report receipts={this.state.receipts} sum={this.state.sum} reportCase={this.state.reportCase} page={"reports"} /> : <Report receipts={false} sum={false} reportCase={this.state.reportCase} page={"reports"}/>}
                </div>
                <div className="reports__button">
                    <BaseButton size="small" type="delete" click={this.onDeleteHandler}>Deletar</BaseButton>
                </div>
            </div>
        )
    }

    getAllReports = () => {
        Axios.get('http://kalkuli-gateway.herokuapp.com/api/v1/get_all_reports')
        .then((response) => {
            this.setState({
                reports: response.data.data.reports,
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    getReportInfo = (date_from, date_to) => {
        Axios.post('http://kalkuli-gateway.herokuapp.com/api/v1/report', {
            "period": {
                date_from: date_from,
                date_to: date_to
            }
        })
        .then((response) => {
            this.setState({
                receipts: response.data.receipts,
                sum: response.data.total_cost,
                isEndDate: false,
                reportCase: 'reports'
            })
        })
        .catch(() => {
            this.setState({
                reportCase: 'do not exist'
            })
        })
    }

    onReportSelect = (index, date_from, date_to) => {
        this.setState({ position: index });
        this.getReportInfo(date_from, date_to)
    }

    onDeleteHandler = () => {

    }
}

export default Reports