import React, { Component } from 'react'
import './Dashboard.scss'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report';
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import axios from 'axios';
import Loader from '../UI/Loader/Loader'
import * as actionTypes from '../../store/actions/actions'
import { connect } from 'react-redux'
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import moment from 'moment'
import 'moment/locale/pt-br'
import './DatePicker.scss'
import * as screenSize from '../../helpers/screenSize'
import getAllReceipts from '../../services/getAllReceipts'
import getAllTags from '../../services/getAllTags'
import {baseURL, config} from '../../services/axiosConfig'

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
        reportCase: null
    }

    componentDidMount() {
        this.fetchTags()
        this.fetchReceipts()
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
    onConfirmHandler = () => { this.props.history.push('/confirmation') }

    chooseButton = (loading, isValid, receipts) => {
        if (loading && isValid) {
            return <Loader type="loader_reports" />
        }
        else if (receipts && isValid) {
            return <BaseButton size="small" type="confirm" click={this.onConfirmButton}>Salvar Relatório</BaseButton>
        }
    }

    onChange = (startDate, endDate) => {
        this.setState(startDate, endDate)
        this.setState({ isEndDate: true })

        if (this.state.isEndDate) {
            var date_from = moment(startDate.startDate).format('YYYY-MM-DD')
            var date_to = moment(startDate.endDate).format('YYYY-MM-DD')

            this.setState({ date_from: date_from, date_to: date_to })

            axios.post(`${baseURL}/report`, {
                "period": {
                    date_from: date_from,
                    date_to: date_to
                },
                config
            })
            .then((response) => {
                console.log(response);
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
    }


    onConfirmButton = () => {
        this.setState({
            loading: true
        })
        axios.post(`${baseURL}/save_report`, {
            "period": {
                date_from: this.state.date_from,
                date_to: this.state.date_to
            },
            config
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

export default connect(null, mapDispatchToProps)(Dashboard)