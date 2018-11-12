import axios from 'axios'

export default async receipt_id => {
  const response = await axios.delete(`https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/receipt/${receipt_id}`)
  return response.data
}
