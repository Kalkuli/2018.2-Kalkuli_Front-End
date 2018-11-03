const fakeData = {
  data: {
    data: {
      tags: [
        {"id": 1, "category": "Alimentação"},
        {"id": 2, "category": "Limpeza"},
      ]
    }
  }
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.data.data.tags)
  })
}