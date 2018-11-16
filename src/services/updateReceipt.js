import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async (receipt_id, receipt) => {
  const company_id = localStorage.getItem('company_id')
  let response = 'done'
  await axios.put(`${baseURL}/${company_id}/update_receipt/${receipt_id}`, receipt, config)
  .catch(err =>{
    response = 'error'
    return response
  })

  return response
}
