import getAllTags from '../../../services/getAllTags'
import mockAxios from 'axios'

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
    'https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/tags'
  )
})

it('should test if request is not being done', async () => {
  const response = await getAllTags(true)
  expect(response).toEqual(null)
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
})