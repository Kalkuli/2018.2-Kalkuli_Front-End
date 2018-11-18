import deleteReport from '../../../services/deleteReport'
import mockAxios from 'axios'
import { baseURL } from '../../../services/__mocks__/axiosConfig'
jest.mock('../../../services/axiosConfig.js')

it('should test if request is being done', async () => {

  mockAxios.delete.mockImplementationOnce(() => Promise.resolve({
    data: {
      Message: "Report was deleted!"
    }
  })) 

  const report_id = 1
  const response = await deleteReport(report_id)

  expect(response).toEqual({Message: "Report was deleted!"})
  expect(mockAxios.delete).toHaveBeenCalledTimes(1)
  expect(mockAxios.delete).toHaveBeenCalledWith(
    `${baseURL}/${localStorage.getItem('company_id')}/report/${report_id}`, undefined
    )
})