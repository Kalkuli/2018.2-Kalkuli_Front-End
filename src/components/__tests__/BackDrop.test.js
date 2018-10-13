import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BackDrop from '../UI/BackDrop/BackDrop'

configure({adapter: new Adapter()})

describe('Testing <BackDrop />', () => {
  
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<BackDrop />)
  })

  it('should show BackDrop when props.show is true', () => {
    wrapper.setProps({show: true})
    expect(wrapper.find('.Backdrop').exists()).toBe(true)
  })

  it('should not show BackDrop when props.show is false', () => {
    wrapper.setProps({show: false})
    expect(wrapper.find('.Backdrop').exists()).toBe(false)
  })
})