import axios from 'axios'

export default async (user) => {
  let response = null
  try {
    response = await axios.post('http://172.23.0.1:5008/api/v1/auth/login', user)
    return {
      token: response.data.auth_token,
      company_id: response.data.company_id
    }
  } catch(err) {
    return 'error'
  }
}