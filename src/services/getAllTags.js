import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async () => {
  let response = null
  const company_id = localStorage.getItem('company_id')
  try {
    response = await axios.get(`${baseURL}/${company_id}/tags`, config)
    return response.data.data.tags
  } catch(err) {
    return response
  }
}