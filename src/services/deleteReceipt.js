import axios from 'axios'

export default async receipt_id => {
  const response = await axios.delete(`https://30dp9sl1lj.execute-api.sa-east-1.amazonaws.com/dev/api/v1/receipt/${receipt_id}`)
  return response.data
}