import ConfirmationMessage from '../UI/ConfirmationMessage/ConfirmationMessage'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import Modal from '../UI/Modal/Modal'

configure({adapter: new Adapter()})

describe('Testing <ConfirmationMessage/>', () => {

    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<ConfirmationMessage/>)
    })

    it('should find confirmation-area className', () => {
        expect(wrapper.find('.confirmation-area')).toHaveLength(1)
    })

    it('should find <BaseButton/>', () => {
        expect(wrapper.find(BaseButton)).toHaveLength(2)
    })

    it('should find <Modal/>', () => {
        expect(wrapper.find(Modal).exists()).toBe(true)
    })

})