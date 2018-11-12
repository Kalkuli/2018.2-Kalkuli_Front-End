import axios from 'axios'

export default async () => {
  let response = null
  try {
    response = await axios.get('https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/tags')
    return response.data.data.tags
  } catch(err) {
    return response
  }
}