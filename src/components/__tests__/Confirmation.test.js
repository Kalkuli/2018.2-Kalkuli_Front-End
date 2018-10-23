import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Confirmation from '../UI/Confirmation/Confirmation'

configure({adapter: new Adapter()})

describe('Testing <Confirmation />', () => {
    
    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<Confirmation />)
    })

    it('should render the confirm area', () => {
        expect(wrapper.find('.confirm-area')).toHaveLength(1)
    })
})