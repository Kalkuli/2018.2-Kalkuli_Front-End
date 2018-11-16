const token = localStorage.getItem('auth_token')

export const config = {
  headers: {'Authorization': "Bearer " + token}
}
export const baseURL = 'https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1'