import axios from 'axios'

export default async () => {
  const response = await axios.get('https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/receipts')
  return response.data.data.receipts
}