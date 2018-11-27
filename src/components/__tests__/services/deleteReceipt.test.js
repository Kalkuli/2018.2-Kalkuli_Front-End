import deleteReceipt from '../../../services/deleteReceipt'
import mockAxios from 'axios'
import { baseURL, config } from '../../../services/axiosConfig'

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
    `${baseURL}/${localStorage.getItem('company_id')}/receipt/${receipt_id}`, config
    )
})

it('should simulate an error', async () => {
  const response = await deleteReceipt(1, true)
  expect(response).toEqual("err")
  expect(mockAxios.delete).toHaveBeenCalledTimes(1)
})