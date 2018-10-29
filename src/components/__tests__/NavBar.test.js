import '../../services/__mocks__/matchMedia'
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NavBar from '../UI/Navbar/Navbar'
import { Link } from 'react-router-dom'

configure({adapter: new Adapter()})

describe('Testing <NavBar />', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it('should find <Link />', () => {
    expect(wrapper.find(Link).exists()).toBe(true)
  })
})