const fakeData = {
  Data: {
    "Message": "Receipt was deleted!"
  }
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.Data)
  })
}