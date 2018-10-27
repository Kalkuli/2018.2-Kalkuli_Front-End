import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Preview from '../Preview/Preview'

configure({adapter: new Adapter()})

describe('Testing <Preview />', () => {

    let wrapper = null
    beforeEach( () => {
        wrapper = shallow(<Preview />)
    })

    it('it should have find preview className just once', () => {
        expect(wrapper.find('.preview')).toHaveLength(1)
    })
})