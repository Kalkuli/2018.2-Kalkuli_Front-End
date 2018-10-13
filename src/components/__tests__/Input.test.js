import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Input from '../UI/Input/Input'

configure({adapter: new Adapter()})

describe('Testing <Input />', () => {

    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<Input />)
    })

    it('should have find input-area__input className just once', () => {
        expect(wrapper.find('.input-area__input')).toHaveLength(1)
    })

    it('should return input-area__input--edit', () => {
        wrapper.setProps({editable: true})
        expect(wrapper.find('.input-area__input--edit')).toHaveLength(1)
    })

})