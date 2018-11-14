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
import * as baseUrl from '../../helpers/baseUrl'

const smallDevice = window.matchMedia('(max-width: 800px)').matches
const orientation = smallDevice ? screenSize.VERTICAL_ORIENTATION : screenSize.HORIZONTAL_ORIENTATION

class Dashboard extends Component {

    state = {
        loading: false,
        startDate: null,
        endDate: null,
        isEndDate: false,
        focusedInput: null,
        receipts: null,
        sum: null,
        date_from: null,
        date_to: null,
        isValid: true,
        reportCase: null,
        prices: [],
        dates: [],
        filteredReceipts: null
    }

    componentDidMount() {
        this.fetchTags()
        this.fetchReceipts()
        this.setState({prices: [], dates: []})
    }
    
    render() {
        moment.locale('pt-br')
        if(this.props.receipts.length > 0){
            this.organizeData(this.props.receipts)
        }
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
                            {this.state.dates.length === 0 ? null : <BarChart dates={this.state.dates} prices={this.state.prices} /> }
                        </div>
                    </div>

                    <div className="dashboard__area__report">
                        {this.state.receipts ? <Report reportCase={this.state.reportCase} receipts={this.state.receipts} sum={this.state.sum} page={"dashboard"} /> : <Report reportCase={this.state.reportCase} receipts={false} sum={false} page={"dashboard"} />}
                        <div className="dashboard__area__report__button">
                            {this.chooseButton(this.state.loading, this.state.isValid, this.state.receipts)}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

    organizeData = () => {
        this.props.receipts.sort((a,b) => {
            a = new Date(a.emission_date);
            b = new Date(b.emission_date);
            return a < b ? -1 : a < b ? 1 : 0;
        })
    }

    sumSameDate = (receipts) => {
        var i 
        var dates = [], prices = []
        for ( i = 0; i < receipts.length; i++){
            if(receipts[i+1] && receipts[i+1].emission_date == receipts[i].emission_date){
                dates.push(receipts[i].emission_date)
                prices.push(receipts[i].total_price + receipts[i+1].total_price)
                i++
            }
            else{
                dates.push(receipts[i].emission_date)
                prices.push(receipts[i].total_price)
            }
        }
        this.setState({
            dates: dates,
            prices: prices
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

        if (this.state.isEndDate) {
            var date_from = moment(startDate.startDate).format('YYYY-MM-DD')
            var date_to = moment(startDate.endDate).format('YYYY-MM-DD')

            var filteredReceipts = this.props.receipts.filter((receipt) => {
                return date_from <= receipt.emission_date && date_to >= receipt.emission_date
            })
            this.setState({filteredReceipts: filteredReceipts})
            this.sumReceipts(filteredReceipts)
            this.sumSameDate(filteredReceipts)
        }
    }


    onConfirmButton = () => {
        this.setState({
            loading: true
        })
        axios.post(baseUrl.default + '/api/v1/save_report', {
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
