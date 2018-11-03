import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchBar from '../UI/SearchBar/SearchBar'

configure({adapter: new Adapter()})

describe('Testing <searchBar/>', () => {
  it('should find search-bar style', () => {
    let wrapper = shallow(<SearchBar />)
    expect(wrapper.find('.search-bar').exists()).toBe(true)
  })
})