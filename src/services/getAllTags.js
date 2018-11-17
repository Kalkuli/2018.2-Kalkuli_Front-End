import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'

export default async (mockError) => {
  let response = null
  try {
    if(mockError) throw 'mockinError'
    response = await axios.get(baseUrl.default + '/api/v1/tags')
    return response.data.data.tags
  } catch(err) {
    return response
  }
}