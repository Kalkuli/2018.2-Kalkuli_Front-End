import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async receipt_id => {
  try {
    const company_id = localStorage.getItem('company_id')
    const response = await axios.delete(`${baseURL}/${company_id}/receipt/${receipt_id}`, config)
    return response.data
  }
  catch(err){
    return 'err'
  }
}
