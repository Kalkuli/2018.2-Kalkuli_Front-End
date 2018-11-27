import getAllReports from '../../../services/getAllReports'
import mockAxios from 'axios'
import { baseURL, config } from '../../../services/axiosConfig'

it('should test if request is being done', async() => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      data: {
        reports: [{}]
      }
    }
  }))

  const response = await getAllReports()
  const company_id = localStorage.getItem('company_id')
  expect(response).toEqual([{}])
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${baseURL}/${company_id}/get_all_reports`, config
  )
})

it('should simulate an error', async () => {
  const response = await getAllReports(true)
  expect(response).toEqual('error')
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
})