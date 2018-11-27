import logUserOut from '../../../services/logUserOut'
import mockAxios from 'axios'
import { baseURL, config } from '../../../services/axiosConfig'

it('should test if request is being done', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      Message: "Você saiu do Kaliu com sucesso"
    }
  })) 

  const response = await logUserOut()
  expect(response).toEqual({Message: "Você saiu do Kaliu com sucesso"})
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
  expect(mockAxios.get).toHaveBeenCalledWith(
    `${baseURL}/auth/logout`, config
  )
})

it('should simulate an error', async () => {
  const response = await logUserOut(true)
  expect(response).toEqual("error")
  expect(mockAxios.get).toHaveBeenCalledTimes(1)
})

