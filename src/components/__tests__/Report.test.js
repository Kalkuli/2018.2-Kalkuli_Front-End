import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Report from '../UI/Report/Report'
import ReceiptInfo from '../UI/ReceiptInfo/ReceiptInfo'
import ReportWarning from '../UI/ReportWarning/ReportWarning';

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
        }]} reportCase={"reports"}/>)
        expect(wrapper.find(ReceiptInfo).exists()).toBe(true)
    })

    it('should have find className Report when reportCase is "reports" and page is Dashboard', () => {
        const wrapper = shallow(<Report receipts={[{
            date: '30/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '40,48'  
        },
        {
            date: '27/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '20,48'  
        }]} reportCase={"reports"} page={"dashboard"}/>)
        expect(wrapper.find('.report')).toHaveLength(1)
    })

    it('should have find className Report when reportCase is "reports" and page is anyone', () => {
        const wrapper = shallow(<Report receipts={[{
            date: '30/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '40,48'  
        },
        {
            date: '27/09/2018',
            cnpj: 'xx.xxx.xxx/xxxx-xx',
            price: '20,48'  
        }]} reportCase={"reports"} page = {""}/>)
        expect(wrapper.find('.report')).toHaveLength(1)
    })

    it('should have find className Report when reportCase is "do not exist" and page is Dashboard', () => {
        const wrapper = shallow(<Report receipts={null} reportCase={"do not exist"} page={"dashboard"}/>)
        expect(wrapper.find(ReportWarning).exists()).toBe(true)
    })

    it('should have find className Report when reportCase is "do not exist" and page is anyone', () => {
        const wrapper = shallow(<Report receipts={null} reportCase={"do not exist"} page={"reports"}/>)
        expect(wrapper.find(ReportWarning).exists()).toBe(true)
    })

    it('should have find className Report when reportCase is null and page is Dashboard', () => {
        const wrapper = shallow(<Report receipts={null} reportCase={null} page={"dashboard"}/>)
        expect(wrapper.find(ReportWarning).exists()).toBe(true)
    })

    it('should have find className Report when reportCase is null and page is Reports', () => {
        const wrapper = shallow(<Report receipts={null} reportCase={null} page={"reports"}/>)
        expect(wrapper.find(ReportWarning).exists()).toBe(true)
    })
})