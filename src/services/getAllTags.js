import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'
import {config, baseURL} from './axiosConfig'

export default async (mockError) => {
  let response = null
  const company_id = localStorage.getItem('company_id')
  try {
    if(mockError) throw 'mockingError'
    response = await axios.get(`${baseUrl.default}/${company_id}/tags`, config)
    return response.data.data.tags
  } catch(err) {
    return response
  }
}