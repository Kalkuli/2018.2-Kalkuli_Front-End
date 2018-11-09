import React, { Component } from 'react'
import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'
import MenuButton from '../../UI/Button/MenuButton/MenuButton'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actions'
import getAllReceipts from '../../../services/getAllReceipts'
import getAllTags from '../../../services/getAllTags'
import searchIcon from '../../../assets/img/search.png'
const smallDevice = window.matchMedia('(max-width: 800px)').matches
export class ReceiptList extends Component {
    state = {  
        receiptsLoaded: false,
        tagsLoaded: false,
        search: ''
    }
    componentDidMount() {
        this.fetchTags()
        this.fetchReceipts()
    }
    render() {
        return (
            <div className='receipts'>
                <Navbar/>
                <div className='receipts__search-receipts'>
                    <input className='receipts__search-receipts__input' value={this.state.search} onChange={this.updateSearch} type='text' placeholder='Procurando algo?'></input><img className='receipts__search-receipts__input-button' src={searchIcon} type='submit'></img>
                </div>
                { this.state.receiptsLoaded && <List search = {this.state.search}
                                                onGetAllReceipts={this.fetchReceipts}
                                                isSmall={smallDevice} /> }
                <MenuButton /> 
            </div>
        )
    }

    updateSearch = (event) => {
        this.setState({search: event.target.value})
    }

    fetchReceipts = async() => {
        const receipts = await getAllReceipts()
        this.props.onReceiptsAdded(receipts)
        this.setState({ receiptsLoaded: true })
    }

    fetchTags = async() => {
        const tags = await getAllTags()
        this.props.onTagsAdded(tags)
        this.setState({ tagsLoaded: true })
	}
}

export const mapDispatchToProps = dispatch => {
    return {
        onReceiptsAdded: (receipts) => {dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts})},
        onTagsAdded: (tags) => dispatch({ type: actionTypes.ADD_TAGS, tags: tags }) 
    }
}

export default connect(null, mapDispatchToProps)(ReceiptList)