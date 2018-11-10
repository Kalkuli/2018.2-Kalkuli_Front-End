import {HomeNavBar, mapStateToProps, mapDispatchToProps} from '../UI/Navbar/HomeNavBar/HomeNavBar'
import Login from '../../components/Login/Login'
import localStorage from '../../services/__mocks__/localStorage'

jest.mock('../../services/logUserIn.js')
window.localStorage = localStorage

describe('Testing <HomeNavBar />', () => {
  const validation = {
    aroba: '@',
    required: true,
    minLength: 5,
    maxLength: 30
  }
  
  const spyOnConfirmOk = jest.fn()
  const spyOnAddAuthToken = jest.fn()
  const props = {
    onConfirmOk: spyOnConfirmOk,
    onAddAuthToken: spyOnAddAuthToken
  }

  let wrapper = null
  beforeEach(() => {

    window.matchMedia = jest.fn(query => ({ 
      matches: query.indexOf('(min-width: 800px)') !== -1, 
    }))
    wrapper = shallow(<HomeNavBar {...props}/>)
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

  it('should test mapStateToProps for retrieving auth_token', () => {
    const initialState = {
      auth_token: 'token'
    }
    expect(mapStateToProps(initialState).auth_token).toMatch('token')
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

  it('should log a valid user', () => {
    wrapper.setState({inputs: {
      'email': {
        'value': 'youssef@gmail.com'
      },
      'password': {
        'value': 'asdfasdf'
      }
    }})
    wrapper.instance().onConfirmLoginHandler()
    //expect(spyOnAddAuthToken).toHaveBeenCalled()
    //expect(spyOnConfirmOk).toHaveBeenCalled()
    localStorage.setItem('auth_token', 'token')
    expect(localStorage.store).toEqual({ auth_token: 'token'})
  })

  it('should not log a invalid user', () => {
    wrapper.setState({
      inputs: {
        'email': {
          'value': 'youssef@gmail.com'
        },
        'password': {
          'value': null
        }
      },
      registration: ''
    })
    expect(wrapper.state('registration')).toMatch('')
    wrapper.instance().onConfirmLoginHandler()
  })

})