import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'

export default async () => {
  let response = null
  try {
    response = await axios.get(baseUrl.default + '/api/v1/tags')
    return response.data.data.tags
  } catch(err) {
    return response
  }
}