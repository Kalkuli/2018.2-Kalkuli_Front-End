import axios from 'axios'

export default async () => {
  const response = await axios.get('https://30dp9sl1lj.execute-api.sa-east-1.amazonaws.com/dev/api/v1/receipts')
  return response.data.data.receipts
}