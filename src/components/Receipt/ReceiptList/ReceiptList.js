import React, { Component, Fragment } from 'react'
import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'
import MenuButton from '../../UI/Button/MenuButton/MenuButton'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actions'
import getAllReceipts from '../../../services/getAllReceipts'
const smallDevice = window.matchMedia('(max-width: 800px)').matches
export class ReceiptList extends Component {
    state = {  
        loaded: false,
    }
    componentDidMount() {
        this.fetchReceipts()
    }
    render() {
        return (
            <div >
                <Navbar/>
                { this.state.loaded && <List    receipts={this.props.receipts} 
                                                onGetAllReceipts={this.fetchReceipts}
                                                isSmall={smallDevice} /> }
                <MenuButton /> 
            </div>
        )
    }

    fetchReceipts = async() => {
        const receipts = await getAllReceipts()
        console.log(receipts)
        this.setState({ loaded: true })
        this.props.onReceiptsAdded(receipts)
    }
}
export const mapStateToProps = state => {
    return {
        receipts: state.receipts
    }
}
export const mapDispatchToProps = dispatch => {
    return {
        onReceiptsAdded: (receipts) => dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts}) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReceiptList)