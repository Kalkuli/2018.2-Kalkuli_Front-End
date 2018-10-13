import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Report from '../UI/Report/Report'
import ReceiptInfo from '../UI/ReceiptInfo/ReceiptInfo'

configure({adapter: new Adapter()})

describe('Testing <Report />', () => {

    it('', () => {
        const wrapper = shallow(<Report data={[            {
            date: '30/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '40,48'  
        },
        {
            date: '27/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '20,48'  
        }]} />)
        expect(wrapper.find(ReceiptInfo).exists()).toBe(true)
    })
})