import React, { Component } from 'react'
import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'
import MenuButton from '../../UI/Button/MenuButton/MenuButton'
import { connect } from 'react-redux'
import searchIcon from '../../../assets/img/search.png'
import * as actionTypes from '../../../store/actions/actions'
import getAllReceipts from '../../../services/getAllReceipts'
const smallDevice = window.matchMedia('(max-width: 800px)').matches
export class ReceiptList extends Component {
    state = {  
        search: ''
    }
    
    render() {
        return (
            <div className='receipts'>
                <Navbar/>
                <div className='receipts__search-receipts'>
                    <input className='receipts__search-receipts__input' value={this.state.search} onChange={this.updateSearch} type='text' placeholder='Procurando algo?'></input><img className='receipts__search-receipts__input-button' src={searchIcon} type='submit'></img>
                </div>
                <List   search={this.state.search}
                        onGetAllReceipts={this.fetchReceipts}
                        isSmall={smallDevice} /> 
                <MenuButton /> 
            </div>
        )
    }
    updateSearch = (event) => { this.setState({search: event.target.value}) }

    fetchReceipts = async() => { this.props.onReceiptsAdded(await getAllReceipts()) }
}
export const mapStateToProps = state => {
    return {
        receipts: state.receipts,
        tags: state.tags
    }
}
export const mapDispatchToProps = dispatch => {
    return {
        onReceiptsAdded: (receipts) => {dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReceiptList)