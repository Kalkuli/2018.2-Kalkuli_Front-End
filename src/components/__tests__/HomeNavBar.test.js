import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {HomeNavBar, mapDispatchToProps} from '../UI/Navbar/HomeNavBar/HomeNavBar'
import Login from '../../components/Login/Login'
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

  it('should test mapDispatchToProps for dispatching onAddAuthToken', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onAddAuthToken()
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'ADD_AUTH_TOKEN'})
  })

  it('should showLogin', () => {
    wrapper.setState({showLogin: true})
    expect(wrapper.find(Login).exists()).toBe(true)
  })

  it('should test onCloseErrorMessage', () => {
    wrapper.setState({registration: 'alguma coisa'})
    expect(wrapper.state(('registration'))).toMatch('alguma coisa')
    wrapper.instance().onCloseErrorMessage()
    expect(wrapper.state(('registration'))).toMatch('')
  })

  it('should test onCloseLogin', () => {
    wrapper.setState({showLogin: true})
    expect(wrapper.state(('showLogin'))).toBe(true)
    wrapper.instance().onCloseLogin()
    expect(wrapper.state(('showLogin'))).toBe(false)
  })
})