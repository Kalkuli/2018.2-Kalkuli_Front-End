import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MenuButton from '../UI/Button/MenuButton/MenuButton'

configure({adapter: new Adapter()})

describe('Testing <MenuButton/>', () => {
  
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<MenuButton />)
  })

  it('should have find menubutton className just once', () => {
    expect(wrapper.find('.menubutton')).toHaveLength(1)
  })

  it('should have find options className just once', () => {
    expect(wrapper.find('.options')).toHaveLength(1)
  })

  it('should render the options elements', () => {
    expect(wrapper.find('.options__element')).toHaveLength(2)
  })

  it('should rotate when clicked', () => {
    wrapper.setProps({rotate: true})
    expect(wrapper.find('.rotate')).toHaveLength(1)
  })

  it('should return to the initial angle', () => {
    wrapper.setProps({rotate: false})
    expect(wrapper.find('.rotate').exists()).toBe(false)
  })

  it('should be able to show the options', () => {
    wrapper.setProps({clickedMenuButton: true})
    expect(wrapper.find('.firstTimeRunning').exists()).toBe(false)
  })

  it('should hide the options', () => {
    wrapper.setProps({clickedMenuButton: false})
    expect(wrapper.find('.firstTimeRunning')).toHaveLength(1)
  })

  it('should open the MenuButton options', () => {
    wrapper.setProps({clickedMenuButton: true, rotate: true})
    expect(wrapper.find('.open')).toHaveLength(1)
  })

  it('should close the MenuButton options', () => {
    wrapper.setProps({clickedMenuButton: true, rotate: false})
    expect(wrapper.find('.close')).toHaveLength(1)
  })

 
})
