const fakeData = {
  data: {
    message: 'Você saiu do Kaliu com sucesso'
  }
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.data.receipt)
  })
}