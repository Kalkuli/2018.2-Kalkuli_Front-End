import axios from 'axios'

export default async () => {
  const response = await axios.get('https://kalkuli-gateway.herokuapp.com/api/v1/receipts')
  return response.data.data.receipts
}