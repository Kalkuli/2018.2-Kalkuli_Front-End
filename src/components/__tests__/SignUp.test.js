import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SignUp from '../UI/Button/SignUp/SignUp'

configure({adapter: new Adapter()})

describe('Testing <SignUp />', () => {

  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<SignUp />)
  })

  it('should toggle large className', () => {
    wrapper.setProps({size: 'large'})
    expect(wrapper.find('.large').exists()).toBe(true)
  })

  it('should toggle small className', () => {
    wrapper.setProps({size: 'small'})
    expect(wrapper.find('.small').exists()).toBe(true)
  })
})