const token = localStorage.getItem('auth_token')

export const config = {
  headers: {'Authorization': "Bearer " + token}
}
export const baseURL = 'http://172.23.0.1:5008/api/v1'