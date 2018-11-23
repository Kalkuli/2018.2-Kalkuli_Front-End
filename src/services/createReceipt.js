import axios from 'axios'
import {config, baseURL} from './axiosConfig'

export default async (receiptJSON, mockError) => {
  const receipt = {
    receipt: {
      ...receiptJSON,
      company_id: localStorage.getItem('company_id')
    }
  }
  try {
    if(mockError) throw 'mockingError'
    const response = await axios.post(`${baseURL}/receipt`, receipt, config)
    return response.data.status
  } catch(err) {
    return 'error'
  }
}