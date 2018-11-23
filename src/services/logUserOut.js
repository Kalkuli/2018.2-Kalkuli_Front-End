import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async (mockError) => {
  let response = null
  try {
    if(mockError) throw 'mockingError'
    response = await axios.get(`${baseURL}/auth/logout`, config)
    return response.data
  } catch(err) {
    return 'error'
  }
}