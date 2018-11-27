const fakeData = {
  data: 'done'
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.data)
  })
}