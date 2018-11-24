const fakeData = {
  data: {
    status: '200'
  }
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.data.data.receipts)
  })
}