export const filterReceipts = (receipts, date_from, date_to, category) => {
    let filteredReceipts

    if(date_from !== null && date_to !== null && Object.keys(category).length > 0){

        filteredReceipts = receipts.filter((receipt) => {
            return date_from <= receipt.emission_date && date_to >= receipt.emission_date 
        })

        filteredReceipts = filteredReceipts.filter((receipt) => {
            return receipt.tag_id === category.id
        })


    }
    else if(date_from !== null && date_to !== null && !Object.keys(category).length > 0){
        filteredReceipts = receipts.filter((receipt) => {
            return date_from <= receipt.emission_date && date_to >= receipt.emission_date
        })
    }
    else {
        filteredReceipts = receipts.filter((receipt) => {
            return receipt.tag_id === category.id
        })
    }

    return filteredReceipts
}