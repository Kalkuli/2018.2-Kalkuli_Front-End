import axios from 'axios'

export default async (user) => {
  let response = null
  try {
    response = await axios.post('http://172.21.0.1:5008/api/v1/auth/login', user)
    return response.data.auth_token
  } catch(err) {
    return 'error'
  }
}