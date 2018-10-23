const fakeData = {
  data: {
    data: {
      receipts: [{
        "emission_date": "2018-09-22",
        "emission_place": "aqqqqqq",
        "tax_value": 20.20,
        "total_price": 123.12,
        "title": "oi",
        "description": "teste",
        "cnpj": "320490234-002",
      }]
    }
  }
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.data.data.receipts)
  })
}