import logUserIn from '../../../services/logUserIn'
import mockAxios from 'axios'

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

  expect(response).toEqual('token') 
  expect(mockAxios.post).toHaveBeenCalledTimes(1)
  expect(mockAxios.post).toHaveBeenCalledWith(
    'https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1/auth/login', user
  )
})

it('should test if request is not being done', async () => {
  const response = await logUserIn(user, true)
  expect(response).toEqual('error')
}) 