import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'

export default async receipt_id => {
  const response = await axios.delete(baseUrl.default + `/api/v1/receipt/${receipt_id}`)
  return response.data
}
