import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'

export default async () => {
  const response = await axios.get(baseUrl.default + '/api/v1/receipts')
  return response.data.data.receipts
}