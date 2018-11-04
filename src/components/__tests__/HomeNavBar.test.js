import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import HomeNavBar from '../UI/Navbar/HomeNavBar/HomeNavBar'

configure({adapter: new Adapter()})

describe('Testing <HomeNavBar />', () => {
  const validation = {
    aroba: '@',
    required: true,
    minLength: 5,
    maxLength: 30
  }
  let wrapper = null
  beforeEach(() => {
      window.matchMedia = jest.fn(query => ({ 
        matches: query.indexOf('(min-width: 800px)') !== -1, 
      })); 
      wrapper = shallow(<HomeNavBar />)
  })

  it('should call showLogin()', () => {
    wrapper.instance().showLogin()
  })

  it('should call onTogglePasswordType()', () => {
    wrapper.instance().onTogglePasswordType()
  })

  it('should call onChangeHandler()', () => {
    wrapper.instance().onChangeHandler({target:{value: 'oi'}}, 'E-mail')
  })

  it('should call checkValidity()', () => {
    wrapper.instance().checkValidity('olar@gmail.comcom', validation)
  })

})