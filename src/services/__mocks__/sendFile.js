const fakeData = {
  data: {
    location: '/testing123'
  }
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.data.location)
  })
}