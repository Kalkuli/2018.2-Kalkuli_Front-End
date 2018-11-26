const fakeData = {
  data: {
    receipt: {
      cnpj: '123123123123',
      emission_date: '2018/10/10'
    }
  }
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.data.receipt)
  })
}