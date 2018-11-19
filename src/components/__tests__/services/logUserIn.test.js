import logUserIn from '../../../services/logUserIn'
import mockAxios from 'axios'
import { baseURL } from '../../../services/axiosConfig'
jest.mock('../../../services/axiosConfig.js')

const user = {
  email: 'test@gmail.com',
  password: 'password123'
}

it('should test if request is being done', async () => {

  mockAxios.post.mockImplementationOnce(() => Promise.resolve({
    data: {
      auth_token: 'token'
    }
  }))

  const response = await logUserIn(user)

  expect(response).toEqual({"company_id": undefined, "token": "token"}) 
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  expect(mockAxios.post).toHaveBeenCalledWith(
    `${baseURL}/auth/login`, user
  )
})

it('should test if request is not being done', async () => {
  const response = await logUserIn(user, true)
  expect(response).toEqual('error')
}) 