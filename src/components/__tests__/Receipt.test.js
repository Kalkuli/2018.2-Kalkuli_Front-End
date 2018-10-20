import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Receipt from '../UI/Receipt/Receipt'

configure({adapter: new Adapter()})

describe('Testing <Receipt />', () => {

  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<Receipt />)
  })

  it('should mock a function', () => {
    const mockCallback = jest.fn(x => x);
    wrapper = shallow(<Receipt onClickHandler={mockCallback}/>)
    wrapper.simulate('click')
    expect(mockCallback).toHaveBeenCalled()
  })

  it('should render follow receipt className', () => {
    expect(wrapper.find('.receipt').exists()).toBe(true)
  })

  it('should toggle the className to large', () => {
    wrapper.setProps({size: 'large'})
    expect(wrapper.find('.receipt--large')).toHaveLength(1)
  })

  it('should toggle the className to small', () => {
    wrapper.setProps({size: 'small'})
    expect(wrapper.find('.receipt--small')).toHaveLength(1)
  })
})