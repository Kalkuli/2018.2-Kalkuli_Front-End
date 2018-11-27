import ReceiptInfo from '../../UI/ReceiptInfo/ReceiptInfo'

describe('Testing <ReceiptInfo />', () => {

    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<ReceiptInfo />)
    })

    it('should have find receipt-info className just once', () => {
        expect(wrapper.find('.receipt-info')).toHaveLength(1)
    })
})