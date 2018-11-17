import axios from 'axios'

export default async (mockError) => {
  let response = null
  try {
    if(mockError) throw 'mockinError'
    response = await axios.get('https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/tags')
    return response.data.data.tags
  } catch(err) {
    return response
  }
}