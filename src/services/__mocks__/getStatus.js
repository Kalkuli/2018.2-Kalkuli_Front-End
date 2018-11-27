const fakeData = {
  data: {
    state: 'SUCCESS'
  }
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.data)
  })
}