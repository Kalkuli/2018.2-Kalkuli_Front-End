import getAllReceipts from '../../../services/getAllReceipts'
import mockAxios from 'axios'

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
    'https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/receipts'
  )
})