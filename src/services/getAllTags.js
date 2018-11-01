import axios from 'axios'

export default async () => {
  const response = await axios.get('http://172.21.0.1:5008/api/v1/tags')
  return response.data.data.tags
}