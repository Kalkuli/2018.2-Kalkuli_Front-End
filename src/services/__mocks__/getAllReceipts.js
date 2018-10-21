const fakeData = {
  data: {
    data: {
      receipts: [{
        "cnpj": "78787866",
        "company_id": 12,
        "emission_date": "2018-09-22",
        "emission_place": "aaaaaa",
        "id": 2,
        "tax_value": 20.2,
        "total_price": 123.12,
      }]
    }
  }
}

export default async () => {
  return await new Promise(resolve => {
    resolve(fakeData.data.data.receipts)
  })
}