import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DropDown from '../UI/DropDown/DropDown'
import TagItem from '../UI/TagItem/TagItem'

configure({adapter: new Adapter()})

describe('Testing <DropDown/>', () => {
  let wrapper = null
  const spyOnSelectedTagHandler = jest.fn()
  const props = {
    selectedTag: {
      'color': '#fff', 
      'id': 1, 
      'category':'oi'
    },
    items: [{
      'color': '#fff', 
      'id': 1, 
      'category':'oi'
    }],
    onSelectedTagHandler: spyOnSelectedTagHandler
  }

  beforeEach(() => {
    wrapper = shallow(<DropDown {...props}/>)
  })

  it('should find TagItem', () => {
    expect(wrapper.find(TagItem).exists()).toBe(true)
  })
})