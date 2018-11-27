import getStatus from '../../../services/getStatus'
import mockAxios from 'axios'

it('should test if request is being done', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: 'SUCCESS'
    }
  }))
  const response = await getStatus('url1')
  expect(response).toEqual({ status: 'SUCCESS' })
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith('url1')
})

it('should simulate an error', async () => {
  const response = await getStatus('url2', true)
  expect(response).toEqual('error')
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
})