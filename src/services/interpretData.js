import axios from 'axios'
import {baseURL} from './axiosConfig'

export default async(rawData, mockError) => { 
  try {
    if(mockError) throw new Error('mockingError')
    const response = await axios.post(`${baseURL}/interpret_data`, rawData)
    return response.data.receipt
   } catch(err) {
    return 'error'
  }
}