import sendFile from '../../../services/sendFile'
import mockAxios from 'axios'
jest.mock('../../../services/axiosConfig.js')

it('should test if request is being done', async() => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      location: '/testing'
    }
  }))
  const response = await sendFile({})
  expect(response).toEqual('/testing')
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
})

it('should mock network error', async() => {
  const response = await sendFile(null, true)
  expect(response).toEqual('error')
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
})