import createReceipt from '../../../services/createReceipt'
import mockAxios from 'axios'
import { baseURL, config } from '../../../services/axiosConfig'
it('should test if request is being done', async() => {

  mockAxios.delete.mockImplementationOnce(() => Promise.resolve({
    data: {
      status: '200'
    }
  }))
  const receiptJSON = {
    cnpj: '123123123123',
    date: '2018/10/10'
  }
  const response = await createReceipt(receiptJSON)
  expect(response).toEqual(undefined)
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  expect(mockAxios.post).toHaveBeenCalledWith(
    `${baseURL}/receipt`, {receipt: receiptJSON}, config
  )
})

it('should mock network error', async() => {
  const response = await createReceipt(null, true)
  expect(response).toEqual('error')
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
})