import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TagItem from '../../components/UI/TagItem/TagItem'
configure({adapter: new Adapter()})

describe('Testing <TagItem />', () => {
  let wrapper = null
  const spyOnClickHandler = jest.fn()
  const props = {
    onClickHandler: spyOnClickHandler
  }

  beforeEach(() => {
    wrapper = shallow(<TagItem {...props}/>)
  })

  it('should call props.onClickHandler', () => {
    wrapper.find('.tag-item').simulate('click')
    expect(spyOnClickHandler).toHaveBeenCalled()
  })
})