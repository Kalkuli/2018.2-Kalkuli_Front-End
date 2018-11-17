import axios from 'axios'

export default async (user, mockError) => {
  let response = null
  try {
    if(mockError) throw 'mockingError'
    response = await axios.post('https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/auth/login', user)
    return response.data.auth_token
  } catch(err) {
    return 'error'
  }
}