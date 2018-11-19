import axios from 'axios'
import {baseURL} from '../services/axiosConfig'

export default async (user, mockError) => {
  let response = null
  try {
    if(mockError) throw 'mockingError'
    response = await axios.post(`${baseURL}/auth/login`, user)
    return {
      token: response.data.auth_token,
      company_id: response.data.company_id
    }
  } catch(err) {
    return 'error'
  }
}