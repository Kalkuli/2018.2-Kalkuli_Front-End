const token = localStorage.getItem('auth_token')

export const config = {
  headers: {'Authorization': "Bearer " + token}
}

export const baseURL = (process.env.REACT_APP_ENV === 'production') ? 'https://d5zf8onjaa.execute-api.sa-east-1.amazonaws.com/prod/api/v1'
                                                                    : 'https://2wpulxi1r7.execute-api.sa-east-1.amazonaws.com/hom/api/v1'