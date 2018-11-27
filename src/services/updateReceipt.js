import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async (receipt_id, receipt, mockError) => {
  try{
    if(mockError) throw new Error('mockingError')
    const company_id = localStorage.getItem('company_id')
    let response = 'done'
    await axios.put(`${baseURL}/${company_id}/update_receipt/${receipt_id}`, receipt, config)
    return response
  }
  catch(err){
    return 'error'
  }
}
