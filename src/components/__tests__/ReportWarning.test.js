import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReportWarning from '../UI/ReportWarning/ReportWarning';

configure({adapter: new Adapter()})

describe('Testing <ReportWarning />', () => {

    it('should', () => {
        const wrapper = shallow(<ReportWarning><p>testing</p></ReportWarning>)
        expect(wrapper.find('.report')).toHaveLength(1)
    })
})