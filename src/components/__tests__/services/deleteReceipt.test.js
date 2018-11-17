import deleteReceipt from '../../../services/deleteReceipt'
import mockAxios from 'axios'

it('should test if request is being done', async () => {

  mockAxios.delete.mockImplementationOnce(() => Promise.resolve({
    data: {
      Message: "Receipt was deleted!"
    }
  })) 

  const receipt_id = 1
  const response = await deleteReceipt(receipt_id)

  expect(response).toEqual({Message: "Receipt was deleted!"})
  expect(mockAxios.delete).toHaveBeenCalledTimes(1)
  expect(mockAxios.delete).toHaveBeenCalledWith(
    `https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/receipt/${receipt_id}`
    )
})