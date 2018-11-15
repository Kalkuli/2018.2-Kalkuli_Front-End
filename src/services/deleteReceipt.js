import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'
import {config, baseURL} from './axiosConfig'

export default async receipt_id => {
  const company_id = localStorage.getItem('company_id')
  const response = await axios.delete(`${baseUrl.default}/${company_id}/receipt/${receipt_id}`, config)
  return response.data
}
