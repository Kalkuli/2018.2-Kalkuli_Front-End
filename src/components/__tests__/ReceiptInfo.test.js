import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReceiptInfo from '../UI/ReceiptInfo/ReceiptInfo'


configure({adapter: new Adapter()})

describe('Testing <ReceiptInfo />', () => {

    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<ReceiptInfo />)
    })

    it('should have find receipt-info className just once', () => {
        expect(wrapper.find('.receipt-info')).toHaveLength(1)
    })
})