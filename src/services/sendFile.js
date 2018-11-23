import axios from 'axios'

export default async(formData, mockError) => {
  const header = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  try {
    if(mockError) throw new Error('mockingError')
    const response = await axios.post('https://kalkuli-extraction.herokuapp.com/extract', formData, header)
    return response.data.location
  } catch(err) {
    return 'error'
  }
}