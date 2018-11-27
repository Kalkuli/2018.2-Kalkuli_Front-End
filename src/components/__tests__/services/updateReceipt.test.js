import updateReceipt from '../../../services/updateReceipt'
import mockAxios from 'axios'
import { baseURL, config } from '../../../services/axiosConfig'

it('should test if request is being done', async () => {
  mockAxios.put.mockImplementationOnce(() => Promise.resolve({
    data: 'done'
  })) 

  const receipt_id = 1
  const company_id = localStorage.getItem('company_id')
  const receipt = {
    cnpj: '12312312323',
    emission_date: '2018/10/10',
    title: 'oi'
  }
  const response = await updateReceipt(receipt_id, receipt)
  expect(response).toEqual('done')
  expect(mockAxios.put).toHaveBeenCalledTimes(1)
  expect(mockAxios.put).toHaveBeenCalledWith(
    `${baseURL}/${company_id}/update_receipt/${receipt_id}`, receipt, config
  )
})

it('should simulate an error', async () => {
  const response = await updateReceipt(null, null, true)
  expect(response).toEqual("error")
  expect(mockAxios.put).toHaveBeenCalledTimes(1)
})

