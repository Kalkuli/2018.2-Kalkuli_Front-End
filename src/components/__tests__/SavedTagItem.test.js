import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SavedTagItems from '../UI/TagItem/SavedTagItem/SavedTagItem'

configure({adapter: new Adapter()})

describe('Testing <SavedTagItems/>', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<SavedTagItems/>)
  })

  it('should change style when size is small', () => {
    wrapper.setProps({size: 'small'})
    expect(wrapper.find('.saved-tag-item--small').exists()).toBe(true)
  })
})
