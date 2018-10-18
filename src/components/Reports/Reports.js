import React, {Component} from 'react'
import './Reports.scss'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report'
import Axios from 'axios'
import {DateRangePicker} from 'react-dates';

// const info = {
//     fakeData: {
//         "report": [{
//             "period": "01/09/2018 - 30/09/2018",
//             "receipts":[{
//                 date: '27/09/2018',
//                 cnpj: 'xx.xxx.xxx/xxxx-xx',
//                 price: '20,48'  
//             },
//             {
//                 date: '27/09/2018',
//                 cnpj: 'zz.zzz.zzz/xxxx-xx',
//                 price: '20,48'  
//             },
//             {
//                 date: '27/09/2018',
//                 cnpj: 'xx.xxx.xxx/xxxx-xx',
//                 price: '20,48'  
//             },
//             {
//                 date: '27/09/2018',
//                 cnpj: 'xx.xxx.xxx/xxxx-xx',
//                 price: '20,48'  
//             }]
//         }]
//     }
// }


var type = "cancel";

class Reports extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            position: 0,
            reports: null
        }
    }

    componentDidMount() {
        this.getAllReports()
    }

    getAllReports = () => {
        Axios.get('http://172.25.0.1:5008/api/v1/get_all_reports')
        .then((response) => {
            this.setState({
                reports: response.data.data.reports
            })
        })
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
                            {this.state.reports.map((data, index) => {
                                if(this.state.position === index){
                                    type = "confirm";
                                }
                                else{
                                    type = "cancel";
                                }
                                return(
                                    <BaseButton size="medium" type={type} click={() => {this.onConfirmHandler(index)}} >{data.date_from}</BaseButton>
                                )
                            })}
                        </div>
                    </div>
                    {/* <Report data={info.fakeData.report[this.state.position].receipts}/> */}
                </div>
                <div className="reports__button">
                    <BaseButton size="small" type="delete" click={this.onDeleteHandler}>Deletar</BaseButton>
                </div>
            </div>
        )
    }

    onConfirmHandler = (index) => {
        this.setState({ position: index });
    }

    onDeleteHandler = () => {

    }
}

export default Reports