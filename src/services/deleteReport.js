import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async report_id => {
  try{
    const company_id = localStorage.getItem('company_id')
    const response = await axios.delete(`${baseURL}/${company_id}/report/${report_id}`, config)
    return response.data
  }
  catch(err){
    return 'error'
  }
}
