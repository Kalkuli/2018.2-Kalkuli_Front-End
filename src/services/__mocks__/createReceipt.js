const fakeData = {
  data: {
    status: 'success'
  }
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.data.status)
  })
}