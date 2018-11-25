import filterReceipts from '../../../helpers/filterReceipts'

describe('Testing filterReceipt', () => {

    const receipts = [{
        emission_date: '2018-09-09',
        tag_id: 1
    },
    {
        emission_date: '2018-10-09',
        tag_id: 2
    },
    {
        emission_date: '2018-11-09',
        tag_id: 3
    }]

    const category = [{
        id: 1
    }, 
    {
        id: 2
    },
    {
        id: 3
    }]

    const category1 = {
        id: 1
    }

    it('should test with dates and category', () => {
        expect(filterReceipts(receipts, '2018-09-01', '2019-09-20', category1)).toEqual([receipts[0]])
    })
    it('should test with dates and category', () => {
        expect(filterReceipts(receipts, null, null, category1)).toEqual([receipts[0]])
    })
})