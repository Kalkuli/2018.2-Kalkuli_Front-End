import React, {Component} from 'react'
<<<<<<< 58c65bc65036e8c51d35e5eb22fe43e9dc0f0155
//import Axios from 'axios'

=======
>>>>>>> Improve receipt list styling
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
