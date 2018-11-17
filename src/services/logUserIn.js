import axios from 'axios'
import * as baseUrl from '../helpers/baseUrl'

export default async (user, mockError) => {
  let response = null
  try {
    if(mockError) throw 'mockingError'
    response = await axios.post(baseUrl.default + '/api/v1/auth/login', user)
    return response.data.auth_token
  } catch(err) {
    return 'error'
  }
}