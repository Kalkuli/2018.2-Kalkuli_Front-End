import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async (mockError) => {
  try{
    if(mockError) throw new Error('mockingError')
    const company_id = localStorage.getItem('company_id')
    const response = await axios.get(`${baseURL}/${company_id}/receipts`, config)
    return response.data.data.receipts
  }
  catch(err){
    return 'error'
  }
}