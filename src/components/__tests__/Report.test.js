import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Report from '../UI/Report/Report'
import ReceiptInfo from '../UI/ReceiptInfo/ReceiptInfo'

configure({adapter: new Adapter()})

describe('Testing <Report />', () => {

    it('should have find ReceiptInfo', () => {
        const wrapper = shallow(<Report receipts={[            {
            date: '30/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '40,48'  
        },
        {
            date: '27/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '20,48'  
        }]} isValid={true}/>)
        expect(wrapper.find(ReceiptInfo).exists()).toBe(true)
    })

    it('should have find className Report when isValid is false and page is Dashboard', () => {
        const wrapper = shallow(<Report receipts={[            {
            date: '30/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '40,48'  
        },
        {
            date: '27/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '20,48'  
        }]} isValid={false} page={"dashboard"}/>)
        expect(wrapper.find('.report')).toHaveLength(1)
    })

    it('should have find className Report when isValid is false and page is anyone', () => {
        const wrapper = shallow(<Report receipts={[{
            date: '30/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '40,48'  
        },
        {
            date: '27/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '20,48'  
        }]} isValid={false} page = {""}/>)
        expect(wrapper.find('.report')).toHaveLength(1)
    })

    it('should have find className Report when isValid is true and page is Dashboard', () => {
        const wrapper = shallow(<Report receipts={null} isValid={true} page={"dashboard"}/>)
        expect(wrapper.find('.report')).toHaveLength(1)
    })

    it('should have find className Report when isValid is true and page is anyone', () => {
        const wrapper = shallow(<Report receipts={null} isValid={true} page={"reports"}/>)
        expect(wrapper.find('.report')).toHaveLength(1)
    })
})