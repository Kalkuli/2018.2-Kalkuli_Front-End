import newTag from '../../../services/newTag'
import mockAxios from 'axios'

const tag = {
  id: 1,
  category: 'Food',
  color: '#424242'
}

it('should test if request is being done', async () => {
  const response = await newTag(tag)
  expect(response).toEqual('success') 
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  expect(mockAxios.post).toHaveBeenCalledWith(
    'https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/create_tag', {"tag": tag}
  )
})

it('should test if request is not being done', async () => {
  const response = await newTag(tag, true)
  expect(response).toEqual('error')
})