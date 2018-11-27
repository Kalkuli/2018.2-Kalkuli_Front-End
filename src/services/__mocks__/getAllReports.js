const fakeData = {
    data: {
        data: {
            reports: [{

            }]
        }
    }
}

export default async () => {
    return await new Promise(resolve => {
        resolve(fakeData.data.data.reports)
    })
}