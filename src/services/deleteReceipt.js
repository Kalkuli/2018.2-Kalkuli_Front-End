import axios from 'axios'

export default async receipt_id => {
  const response = await axios.delete(`https://kalkuli-gateway.herokuapp.com/api/v1/receipt/${receipt_id}`)
  return response.data
}