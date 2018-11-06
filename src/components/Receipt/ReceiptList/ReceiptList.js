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
        receiptsLoaded: false,
        tagsLoaded: false,
    }
    componentDidMount() {
        this.fetchTags()
        this.fetchReceipts()
    }
    render() {
        return (
            <div >
                <Navbar/>
                { this.state.receiptsLoaded && <List    onGetAllReceipts={this.fetchReceipts}
                                                        isSmall={smallDevice}/>}
                <MenuButton /> 
            </div>
        )
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
        onReceiptsAdded: (receipts) => dispatch({type: actionTypes.ADD_RECEIPTS, receipts: receipts}),
        onTagsAdded: (tags) => dispatch({ type: actionTypes.ADD_TAGS, tags: tags }) 
    }
}

export default connect(null, mapDispatchToProps)(ReceiptList)