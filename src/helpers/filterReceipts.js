export const filterReceipts = (receipts, date_from, date_to) => {
    let filteredReceipts = receipts.filter((receipt) => {
        return date_from <= receipt.emission_date && date_to >= receipt.emission_date
    })

    return filteredReceipts
}