import React, { Component, Fragment } from 'react'
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
import ConfirmationMessage from '../../components/UI/ConfirmationMessage/ConfirmationMessage'
import BackDrop from '../../components/UI/BackDrop/BackDrop'
import deleteReport from '../../services/deleteReport'
import {baseURL, config} from '../../services/axiosConfig'
import {connect} from 'react-redux'
import {filterReceipts} from '../../helpers/filterReceipts'
import getAllReceipts from '../../services/getAllReceipts'
import getAllTags from '../../services/getAllTags'
import * as actionTypes from '../../store/actions/actions'

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
        file: null, 
        confirmation: false,
        idReport: null
    }

    componentDidMount() {
        this.getAllReports()
        this.fetchReceipts()
        this.fetchTags()
    }

    render() {
        return (
            <div className="reports">
                <Navbar />
                <div className="reports__area">
                    {this.state.confirmation ? this.renderConfirmationMessage() : null}
                    <div className="reports__area__content">
                        
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
                                let tag = this.findTag(data.tag_id)
                                let id = data.id
                                return(
                                    <div className="reports__area__content__resumes__button">
                                        <BaseButton size='medium' type={type} click={() => {this.onReportSelect(index, start, end, tag, id)}} >{startDisplayReport + "-" + endDisplayReport + '\n' + tag}</BaseButton>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="reports__area__report">
                        {this.state.receipts ? <Report receipts={this.state.receipts} sum={this.state.sum} reportCase={this.state.reportCase} page={"reports"} /> : <Report receipts={false} sum={false} reportCase={this.state.reportCase} page={"reports"}/>}
                        <div className="reports__area__report__buttons">
                            <div className="reports__area__report__buttons__button">
                                <BaseButton size="small" type={this.state.position === null ? 'disable' : 'delete'} click={this.onConfirmationTrue}>Deletar</BaseButton>
                            </div>
                            <div className="reports__area__report__buttons__button">
                                <BaseButton size="small" type="confirm" click={()=>{this.onExportHandler(this.state.receipts, this.state.sum)}}>Export</BaseButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    findTag = (tag_id) => {
        let tag = this.props.tags.filter((tag) => {
            return tag_id === tag.id
        })
        return tag
    }

    getAllReports = () => {
        const company_id = localStorage.getItem('company_id')
        Axios.get(`${baseURL}/${company_id}/get_all_reports`, config)
            .then((response) => {
                this.setState({
                    reports: response.data.data.reports,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    sumReceipts = (receipts) => {
        var sum = 0
        for(var i = 0; i < receipts.length; i++){
            sum += receipts[i].total_price
        }
        return sum.toFixed(2);
    }

    getReportInfo = (date_from, date_to, tag) => {
        let filteredReceipts = filterReceipts(this.props.receipts, date_from, date_to, tag)

        if(filteredReceipts <= 0){
            this.setState({
                reportCase: 'do not exist'
            })
        }
        else {
            let sum = this.sumReceipts(filteredReceipts)
            this.setState({
                sum: sum,
                receipts: filteredReceipts,
                reportCase: 'reports'
            })
        }
    }

    onReportSelect = (index, date_from, date_to, tag, id) => {
        this.setState({ position: index, idReport: id });
        this.getReportInfo(date_from, date_to, tag)
    }

    onDeleteHandler = async() => {
        let report_id = this.state.idReport
        const response = await deleteReport(report_id)
        this.setState({ confirmation: false })
        this.getAllReports()
      }

    onCancelHandler = () => {
        this.setState({confirmation: false})
    }
    
    onConfirmationTrue = () => { this.setState({confirmation: true}) }  

    onExportHandler = (receipts, sum) => {
        Axios.post(`${baseURL}/export`, {
            receipts: receipts,
            total_cost: sum
        }, config).then((response) => {
            FileDownload(response.data, 'report.csv')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    renderConfirmationMessage = () =>{
        return(
            <Fragment>
                <ConfirmationMessage onDeleteHandler={this.onDeleteHandler}
                                     onCancelHandler={this.onCancelHandler}
                                     action='deletar'/>
                <BackDrop show={this.state.confirmation} click={this.onCancelHandler}/>
            </Fragment>
        );
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

export default connect(mapStateToProps, mapDispatchToProps) (Reports)