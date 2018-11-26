import sendFile from '../../../services/sendFile'
import mockAxios from 'axios'
import { config } from '../../../services/axiosConfig'

it('should test if request is being done', async() => {
  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      location: '/testing'
    }
  }))
  const header = {"Content-Type": "multipart/form-data"}
  const response = await sendFile({})

  expect(response).toEqual('/testing')
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  expect(mockAxios.post).toHaveBeenCalledWith(
    `https://kalkuli-extraction.herokuapp.com/extract`, {}, {headers: header} 
  )
})

it('should mock network error', async() => {
  const response = await sendFile(null, true)
  expect(response).toEqual('error')
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
})