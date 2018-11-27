import interpretData from '../../../services/interpretData'
import mockAxios from 'axios'
import { baseURL, config } from '../../../services/axiosConfig'

it('should test if request is being done', async () => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      receipt: {}
    }
  })) 

  const rawData = 'rawDataTesting'
  const response = await interpretData(rawData)
  
  expect(response).toEqual({})
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  expect(mockAxios.post).toHaveBeenCalledWith(
    `${baseURL}/interpret_data`, rawData 
  )
})

it('should simulate an error', async () => {
  const response = await interpretData(null, true)
  expect(response).toEqual('error')
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
})