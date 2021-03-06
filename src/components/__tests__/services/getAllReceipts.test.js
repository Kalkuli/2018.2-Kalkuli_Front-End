import getAllReceipts from '../../../services/getAllReceipts'
import mockAxios from 'axios'
import { baseURL, config } from '../../../services/axiosConfig'

it('should test if request is being done', async () => {

  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      data: { receipts: [{title: 'testing'}] }
    }
  }))

  const response = await getAllReceipts()

  expect(response).toEqual([{title: 'testing'}])
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${baseURL}/${localStorage.getItem('company_id')}/receipts`, config
  )
})

it('should simulate an error', async () => {
  const response = await getAllReceipts(true)
  expect(response).toEqual("error")
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
})