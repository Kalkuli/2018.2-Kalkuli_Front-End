import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async (mockError) => {
  let response = null
  const company_id = localStorage.getItem('company_id')
  try {
    if(mockError) throw new Error('mockingError')
    response = await axios.get(`${baseURL}/${company_id}/tags`, config)
    return response.data.data.tags
  } catch(err) {
    return response
  }
}