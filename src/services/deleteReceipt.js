import axios from 'axios'

export default async receipt_id => {
  const response = await axios.delete(`http://172.21.0.1:5008/api/v1/receipt/${receipt_id}`)
  return response.data
}
