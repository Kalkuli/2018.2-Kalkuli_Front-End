import React, { Component } from 'react'
import './Dashboard.scss'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report';
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import axios from 'axios';
import Loader from '../UI/Loader/Loader'
import BarChart from '../UI/BarChart/BarChart';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import moment from 'moment'
import 'moment/locale/pt-br'
import './DatePicker.scss'
import * as screenSize from '../../helpers/screenSize'
import getAllReceipts from '../../services/getAllReceipts'
import getAllTags from '../../services/getAllTags'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions/actions'
import {baseURL, config} from '../../services/axiosConfig'
import {filterReceipts} from '../../helpers/filterReceipts'

const smallDevice = window.matchMedia('(max-width: 800px)').matches
const orientation = smallDevice ? screenSize.VERTICAL_ORIENTATION : screenSize.HORIZONTAL_ORIENTATION

export class Dashboard extends Component {

    state = {
        loading: false,
        startDate: null,
        endDate: null,
        isEndDate: false,
        focusedInput: null,
        receipts: [],
        sum: null,
        date_from: null,
        date_to: null,
        isValid: true,
        reportCase: null,
        series: [{
            name: 'Valor gasto',
            data: []
        }],
        filteredReceipts: null,
        options: {
            chart: {
              id: "basic-bar",
              fontFamily: "Montserrat, sans-serif",
              foreColor: '#353535',
            },
            plotOptions: {
              bar: {
                horizontal: false,
              }
            },
            colors: "#0F8891",
            xaxis: {
              categories: []
            },
            dataLabels: {
              enabled: false
            },
            tooltip: {
              enabled: true,
    
            },
            responsive: [{
              breakpoint: 480,
              options: {
                plotOptions: {
                  bar: {
                    horizontal: true
                  }
                }
              }
            }]
          }
    }

    componentDidMount() {
        this.fetchTags()
        this.fetchReceipts()
        this.setState({
            series: [{
                data: []
            }],
            options: {
                xaxis: {
                    categories: []
                }
            }
        })
    }
    
    render() {
        moment.locale('pt-br')
        return (
            <div className="dashboard">
                <Navbar/>
                <div className="dashboard__area">
                    <div className="dashboard__area__content">
                        <div className="dashboard__area__content__datepicker">
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
                            orientation={orientation}
                            small={smallDevice}
                            />
                        </div>

                        <div className="dashboard__area__content__graphs">
                            <BarChart options={this.state.options} series={this.state.series} />
                        </div>
                    </div>

                    <div className="dashboard__area__report">
                        {this.state.filteredReceipts ? <Report reportCase={this.state.reportCase} receipts={this.state.filteredReceipts} sum={this.state.sum} page={"dashboard"} /> : <Report reportCase={this.state.reportCase} receipts={false} sum={false} page={"dashboard"} />}
                        <div className="dashboard__area__report__button">
                            {this.chooseButton(this.state.loading, this.state.isValid, this.state.receipts)}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

    organizeData = () => {
        var copy = [...this.props.receipts]
        copy.sort((a,b) => {
            a = new Date(a.emission_date);
            b = new Date(b.emission_date);
            return a < b ? -1 : a < b ? 1 : 0;
        })
        this.setState({receipts: copy})
    }

    sumSameDate = (receipts) => {
        let i
        let dates = [], prices = []
        let sum = 0
        for ( i = 0; i < receipts.length; i++){
            if(receipts[i+1] && receipts[i+1].emission_date === receipts[i].emission_date){
                while(receipts[i+1] && receipts[i+1].emission_date === receipts[i].emission_date){
                    sum += receipts[i].total_price
                    i++
                }
                let displayDate = new Date(receipts[i].emission_date + " " + "GMT-0300").toLocaleDateString()
                dates.push(displayDate)
                prices.push(sum + receipts[i].total_price)
            }
            else{
                let displayDate = new Date(receipts[i].emission_date + " " + "GMT-0300").toLocaleDateString()
                dates.push(displayDate)
                prices.push(receipts[i].total_price)
            }
        }
        this.setState({
            series: [{
                data: prices
            }],
            options: {
                xaxis: {
                    categories: dates
                }
            }
        })
    }
    
    onConfirmHandler = () => { this.props.history.push('/confirmation') }

    chooseButton = (loading, isValid, receipts) => {
        if (loading && isValid) {
            return <Loader type="loader_reports" />
        }
        else if (receipts && isValid) {
            return <BaseButton size="small" type="confirm" click={this.onConfirmButton}>Salvar Relatório</BaseButton>
        }
    }

    sumReceipts = (receipts) => {
        var sum = 0
        for(var i = 0; i < receipts.length; i++){
            sum += receipts[i].total_price
        }
        this.setState({sum: sum.toFixed(2)})
    }

    onChange = (startDate, endDate) => {
        this.setState(startDate, endDate)
        this.setState({ isEndDate: true })
        this.organizeData()

        if (this.state.isEndDate) {
            var date_from = moment(startDate.startDate).format('YYYY-MM-DD')
            var date_to = moment(startDate.endDate).format('YYYY-MM-DD')

            var filteredReceipts = filterReceipts(this.state.receipts, date_from, date_to)

            this.setState({filteredReceipts: filteredReceipts})
            this.sumReceipts(filteredReceipts)
            this.sumSameDate(filteredReceipts)
            this.setState({reportCase: 'reports'})
        }
    }


    onConfirmButton = () => {
        this.setState({
            loading: true
        })
        axios.post(`${baseURL}/save_report`, {
            "period": {
                period: {
                    date_from: this.state.date_from,
                    date_to: this.state.date_to
                }
            }
        }, config)
        .then(() => {
            this.setState({
                loading: false
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    fetchReceipts = async() => {
        const receipts = await getAllReceipts()
        this.props.onReceiptsAdded(receipts)
    }

    fetchTags = async() => {
        const tags = await getAllTags()
        this.props.onTagsAdded(tags)
	}
}

export const mapDispatchToProps = dispatch => {
    return {
        onReceiptsAdded: (receipts) => {dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts})},
        onTagsAdded: (tags) => dispatch({ type: actionTypes.ADD_TAGS, tags: tags }) 
    }
}
export const mapStateToProps = state => {
    return {
        receipts: state.receipts,
        tags: state.tags
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
