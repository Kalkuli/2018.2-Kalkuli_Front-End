import React, {Component} from 'react'
//import Axios from 'axios'

import List from './List'
import Navbar from '../../UI/Navbar/Navbar'
import './ReceiptList.scss'



//const URL = 'URL'

export default class ReceiptList extends Component{
   /* constructor(props){
        super(props)
        this.state = []
    }

   getAllReceipts(){
       Axios.get('${URL}?sort=-creatAt')
   }*/

    render(){
        return(
            <div >
                <Navbar/>
                <List/>
            </div>
        )
    }
}
