import axios from 'axios'

export default async () => {
  const response = await axios.get('http://172.21.0.1:5008/api/v1/receipts')
  return response.data.data.receipts
}