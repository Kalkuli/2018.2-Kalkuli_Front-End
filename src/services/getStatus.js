import axios from 'axios'
export default async (statusURL, mockError) => {
  try {
    if(mockError) throw new Error('mockingError')
    const response = await axios.get(statusURL)
    return response.data
  } catch(err) {
    return 'error'
  }
}