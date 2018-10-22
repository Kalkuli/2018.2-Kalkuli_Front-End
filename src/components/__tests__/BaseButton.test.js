import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BaseButton from '../UI/Button/BaseButton/BaseButton'

configure({adapter: new Adapter()})

describe('Testing <BaseButton />', () => {
    
    let wrapper = null

    it('should have find base-button className just once', () => {
        wrapper = shallow(<BaseButton />)
        expect(wrapper.find('.base-button')).toHaveLength(1)
    })

    it('should return the action to confirm', () => {
        wrapper = shallow(<BaseButton type='confirm' />)
        expect(wrapper.find('.confirm').exists()).toBe(true)
    })

    it('should return the action to delete', () => {
        wrapper = shallow(<BaseButton type='delete'/>)
        expect(wrapper.find('.delete').exists()).toBe(true)
    })

    it('should return the action to delete', () => {
        wrapper = shallow(<BaseButton type='disable'/>)
        expect(wrapper.find('.disable').exists()).toBe(true)
    })

    it('should return an action to choose the file of a small button', () => {
        wrapper = shallow(<BaseButton type='choose-file' size='small' />)
        expect(wrapper.find('.base-button--small').exists()).toBe(true)
    })

    it('should return an action to choose the file of a medium button', () => {
        wrapper = shallow(<BaseButton type='choose-file' size='medium' />)
        expect(wrapper.find('.base-button--medium').exists()).toBe(true)
    })

    it('should return the action to no background', () => {
        wrapper = shallow(<BaseButton type='no-background' />)
        expect(wrapper.find('.no-background').exists()).toBe(true)
    })
})