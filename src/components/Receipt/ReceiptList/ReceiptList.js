import React, { Component, Fragment } from 'react'
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
        loaded: false,
        search: ''
    }
    componentDidMount() {
        this.fetchReceipts()
        this.fetchTags()
    }
    render() {
        let filteredReceipts = this.filterReceipts(this.props.receipts)
        return (
            <div className='receipts'>
                <Navbar/>
                <div className='receipts__search-receipts'>
                    <input className='receipts__search-receipts__input' value={this.state.search} onChange={this.updateSearch} type='text' placeholder='Procurando algo?'></input><img className='receipts__search-receipts__input-button' src={searchIcon} type='submit'></img>
                </div>
                { this.state.loaded && <List    receipts={filteredReceipts} 
                                                onGetAllReceipts={this.fetchReceipts}
                                                isSmall={smallDevice} /> }
                <MenuButton /> 
            </div>
        )
    }

    filterReceipts = (receipts) => {
        if(receipts){
            let filteredReceipts = receipts.filter((receipt) => {
                if(receipt.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
                    return receipt.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                else if(receipt.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
                    return receipt.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            })
            return filteredReceipts
        }
    }

    updateSearch = (event) => {
        this.setState({search: event.target.value})
    }

    fetchReceipts = async() => {
        const receipts = await getAllReceipts()
        this.setState({ loaded: true })
        this.props.onReceiptsAdded(receipts)
    }

    fetchTags = async() => {
		const tags = await getAllTags()
        this.setState({ tags })
		this.props.onTagsAdded(tags)
	}
}
export const mapStateToProps = state => {
    return {
        receipts: state.receipts
    }
}
export const mapDispatchToProps = dispatch => {
    return {
        onReceiptsAdded: (receipts) => dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts}),
        onTagsAdded: (tags) => dispatch({ type: actionTypes.ADD_TAGS, tags: tags }) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptList)