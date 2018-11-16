import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async (receipt_id, receipt) => {

  console.log(receipt)
  const company_id = localStorage.getItem('company_id')
  await axios.put(`${baseURL}/${company_id}/update_receipt/${receipt_id}`, receipt, config)
  return "Success"
}
