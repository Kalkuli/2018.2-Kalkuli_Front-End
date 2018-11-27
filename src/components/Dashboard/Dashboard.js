import React, { Component } from 'react'
import './Dashboard.scss'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report';
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import axios from 'axios';
import Loader from '../UI/Loader/Loader'
import BarChart from '../UI/BarChart/BarChart';
import DropDown from '../UI/DropDown/DropDown'
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
import filterReceipts from '../../helpers/filterReceipts'
import MenuButton from '../UI/Button/MenuButton/MenuButton'

const smallDevice = window.matchMedia('(max-width: 800px)').matches
const orientation = smallDevice ? screenSize.VERTICAL_ORIENTATION : screenSize.HORIZONTAL_ORIENTATION

export class Dashboard extends Component {

    state = {
        selectedTag: {},
        showItems: false,
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
          }
    }

    componentDidMount() {
        this.fetchData()
        this.setState({
            series: [{
                name: 'Valor Gasto',
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
                <MenuButton/>
                <div className="dashboard__area">
                    <div className="dashboard__area__filters">
                        <div className="dashboard__area__filters__dashboard">
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
                                orientation={orientation}/>
                        </div>
                        <div className="dashboard__area__filters__category">
                            { this.handleExceptionDropDown() }
                        </div>
                    </div>
                    <div className="dashboard__area__content">
                        <div className="dashboard__area__content__graphs">
                            {this.state.filteredReceipts ? <BarChart options={this.state.options} series={this.state.series} /> : null}
                        </div>

                        <div className="dashboard__area__report">
                            {this.state.filteredReceipts ? <Report reportCase={this.state.reportCase} receipts={this.state.filteredReceipts} sum={this.state.sum} page={"dashboard"} /> : <Report reportCase={this.state.reportCase} receipts={false} sum={false} page={"dashboard"} />}
                            <div className="dashboard__area__report__button">
                                {this.chooseButton(this.state.loading, this.state.isValid, this.state.receipts)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleExceptionDropDown = () => {
		let items = null
		if(this.props.tags)
			items = this.props.tags
		else 
			items = [{"id": 0, "category": "erro", "color": "#424242"}]		
		
			return <DropDown 	items={items}
								onDropDownHandler={this.onDropDownHandler}
								onSelectedTagHandler={this.onSelectedTagHandler}
								selectedTag={this.state.selectedTag}
								showItems={this.state.showItems}
                                createCategory={null}
                                empty={true} />
    }
    
    onDropDownHandler = () => { this.setState(prevState => ({ showItems: !prevState.showItems })) }

    onSelectedTagHandler = (tag) => {

        this.setState({	selectedTag: tag, showItems: false })
        let organized = this.organizeData()

        let filteredReceipts

        if(this.state.endDate === null) {
            filteredReceipts = filterReceipts(organized, null, null, tag)
        }
        
        else{
            
            let date_from = moment(this.state.startDate).format('YYYY-MM-DD')
            let date_to = moment(this.state.endDate).format('YYYY-MM-DD')

            filteredReceipts = filterReceipts(organized, date_from, date_to, tag)
        }


        if(filteredReceipts.length <= 0){
            this.setState({
                reportCase: 'do not exist',
                filteredReceipts: null
            })
        }
        else{
            this.setState({
                filteredReceipts: filteredReceipts,
                reportCase: 'reports'
            })
            this.sumReceipts(filteredReceipts)
            this.sumSameDate(filteredReceipts)
        }
    }

    organizeData = () => {
        var copy = [...this.props.receipts]
        copy.sort((a,b) => {
            a = new Date(a.emission_date);
            b = new Date(b.emission_date);
            return a < b ? -1 : a < b ? 1 : 0;
        })
        this.setState({receipts: copy})

        return copy
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
                name: 'Valor Gasto',
                data: prices
            }],
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
                    categories: dates
                  },
                  dataLabels: {
                    enabled: false
                  },
                  tooltip: {
                    enabled: true,
          
                  },
                }
        })
    }
    
    onConfirmHandler = () => { this.props.history.push('/confirmation') }

    chooseButton = (loading, isValid, receipts) => {
        if (loading && isValid) {
            return <Loader type="loader_reports" />
        }
        else if (receipts && isValid) {
            return <BaseButton type="confirm" click={this.onConfirmButton}>Salvar Relatório</BaseButton>
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
        let organized = this.organizeData()

        if (this.state.isEndDate) {
            this.setState({
                startDate: startDate.startDate,
                endDate: startDate.endDate
            })
            var date_from = moment(startDate.startDate).format('YYYY-MM-DD')
            var date_to = moment(startDate.endDate).format('YYYY-MM-DD')

            var filteredReceipts = filterReceipts(organized, date_from, date_to, this.state.selectedTag)

            if(filteredReceipts <= 0){
                this.setState({
                    reportCase: 'do not exist',
                    filteredReceipts: null
                })
            }
            else{
                this.setState({
                    filteredReceipts: filteredReceipts,
                    date_to: date_to,
                    date_from: date_from,
                    reportCase: 'reports'
                })
                this.sumReceipts(filteredReceipts)
                this.sumSameDate(filteredReceipts)
            }
        }
    }


    onConfirmButton = () => {
        const company_id = localStorage.getItem('company_id')
        this.setState({
            loading: true
        })
        axios.post(`${baseURL}/save_report`, {
            company_id: company_id,
            date_to: this.state.date_to,
            date_from: this.state.date_from,
            tag_id: this.state.selectedTag.id
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

    fetchData = async() => {
        const [receipts, tags] = await Promise.all([
            getAllReceipts(),
            getAllTags()
        ])
        this.props.onReceiptsAdded(receipts)
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
