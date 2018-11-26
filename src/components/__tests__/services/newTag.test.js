import newTag from '../../../services/newTag'
import mockAxios from 'axios'
import { baseURL, config } from '../../../services/axiosConfig'

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
    `${baseURL}/create_tag`, {"tag": tag}, config
  )
})

it('should test if request is not being done', async () => {
  const response = await newTag(tag, true)
  expect(response).toEqual('error')
})