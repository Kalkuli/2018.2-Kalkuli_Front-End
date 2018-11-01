import axios from 'axios'

export default async () => {
  let response = null
  try {
    response = await axios.get('http://172.21.0.1:5008/api/v1/tags')
    return response.data.data.tags
  } catch(err) {
    return response
  }
}