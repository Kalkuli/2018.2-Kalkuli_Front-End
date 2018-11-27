import getAllTags from '../../../services/getAllTags'
import mockAxios from 'axios'
import { baseURL, config } from '../../../services/axiosConfig'

it('should test if request is being done', async () => {

  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      data: { tags: [{category: 'Food'}] }
    }
  }))

  const response = await getAllTags()

  expect(response).toEqual([{category: 'Food'}])
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${baseURL}/${localStorage.getItem('company_id')}/tags`, config
  )
})

it('should test if request is not being done', async () => {
  const response = await getAllTags(true)
  expect(response).toEqual(null)
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
})