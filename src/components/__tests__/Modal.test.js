import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Modal from '../UI/Modal/Modal'


configure({adapter: new Adapter()})

describe('Testing <Modal />', () => {

    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<Modal />)
    })

    it('should have find modal className just once', () => {
        expect(wrapper.find('.modal')).toHaveLength(1)
    })

    it('should show the modal', () => {
        wrapper.setProps({show: true})
        expect(wrapper.find('.show')).toHaveLength(1)
    })
})