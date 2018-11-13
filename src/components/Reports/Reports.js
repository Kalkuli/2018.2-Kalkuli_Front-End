import React, { Component } from 'react'
import './Reports.scss'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report'
import Axios from 'axios'
import { DateRangePicker } from 'react-dates';
import FileDownload from 'js-file-download'
import moment from 'moment'
import 'moment/locale/pt-br'
import * as screenSize from '../../helpers/screenSize'
var type = "no-background"
var comeco = null;
var fim = null;
const smallDevice = window.matchMedia('(max-width: 800px)').matches
const orientation = smallDevice ? screenSize.VERTICAL_ORIENTATION : screenSize.HORIZONTAL_ORIENTATION

class Reports extends Component {

    state = {
        position: null,
        reports: null,
        receipts: null,
        sum: null,
        reportCase: null,
        file: null
    }

    componentDidMount() {
        this.getAllReports()
    }

    render() {
        return (
            <div className="reports">
                <Navbar />
                <div className="reports__area">
                    <div className="reports__area__content">
                        <div className="reports__area__content__datepicker">
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
                                hideKeyboardShortcutsPanel={() => true}
                                orientation={orientation}
                                small={smallDevice}
                            />
                        </div>
                        
                        
                        <div className="reports__area__content__resumes">
                            {this.state.reports === null ? null : this.state.reports.map((data, index) => {
                                let start = moment(data.date_from + " GMT-0300").format('YYYY-MM-DD')
                                let end = moment(data.date_to + " GMT-0300").format('YYYY-MM-DD')

                                let startDisplayReport = new Date(start + " GMT-0300").toLocaleDateString()
                                let endDisplayReport = new Date(end + " GMT-0300").toLocaleDateString()

                                if (this.state.position === index) {
                                    type = "confirm";
                                    comeco = start;
                                    fim = end;
                                }
                                else{
                                    type = "no-background";
                                }
                                return(
                                    <div className="reports__area__content__resumes__button">
                                        <BaseButton size='medium' type={type} click={() => {this.onReportSelect(index, start, end)}} >{startDisplayReport + "-" + endDisplayReport}</BaseButton>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="reports__area__report">
                        {this.state.receipts ? <Report receipts={this.state.receipts} sum={this.state.sum} reportCase={this.state.reportCase} page={"reports"} /> : <Report receipts={false} sum={false} reportCase={this.state.reportCase} page={"reports"}/>}
                        <div className="reports__area__report__buttons">
                            <div className="reports__area__report__buttons__button">
                                <BaseButton size="small" type="delete" click={this.onDeleteHandler}>Deletar</BaseButton>
                            </div>
                            <div className="reports__area__report__buttons__button">
                                <BaseButton size="small" type="confirm" click={()=>{this.onExportHandler(comeco, fim)}}>Export</BaseButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getAllReports = () => {
        Axios.get('https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/get_all_reports')
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
        Axios.post('https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/report', {
            "period": {
                date_from: date_from,
                date_to: date_to
            }
        })
        .then((response) => {
            console.log(response)
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

    onExportHandler = (date_from, date_to) => {
        Axios.post('https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/export', {
            "period": {
                date_from: date_from,
                date_to: date_to
            }
        }).then((response) => {
            FileDownload(response.data, 'report.csv')
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default Reports