import deleteReport from '../../../services/deleteReport'
import mockAxios from 'axios'

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
    `https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/report/${report_id}`
    )
})