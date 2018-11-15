import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'
import {config, baseURL} from './axiosConfig'

export default async () => {
  const company_id = localStorage.getItem('company_id')
  const response = await axios.get(`${baseUrl.default}/${company_id}/receipts`, config)
  return response.data.data.receipts
}