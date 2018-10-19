import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReportLabels from '../UI/ReportLabels/ReportLabels';

configure({adapter: new Adapter()})

describe('Testing <ReportLabels />', () => {

    it('should', () => {
        const wrapper = shallow(<ReportLabels/>)
        expect(wrapper.find('.report-labels')).toHaveLength(1)
    })
})