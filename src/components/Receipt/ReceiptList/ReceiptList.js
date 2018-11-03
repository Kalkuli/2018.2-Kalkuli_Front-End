import React, { Component } from 'react'
import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'
import MenuButton from '../../UI/Button/MenuButton/MenuButton'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions/actions'
import getAllReceipts from '../../../services/getAllReceipts'
import getAllTags from '../../../services/getAllTags'
const smallDevice = window.matchMedia('(max-width: 800px)').matches
export class ReceiptList extends Component {
    state = {  
        loaded: false,
    }
    componentDidMount() {
        this.fetchReceipts()
        this.fetchTags()
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