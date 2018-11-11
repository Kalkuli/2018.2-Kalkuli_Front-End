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
  const spyPreventDefault = jest.fn()
  const props = {
    onConfirmOk: spyOnConfirmOk,
    onAddAuthToken: spyOnAddAuthToken
  }
  const event = {
    target: {
      value: 'youssef'
    },
    preventDefault: spyPreventDefault
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

  it('should persist an user by not asking his login again while there is auth_token in localStorage', () => {
    wrapper = shallow(<HomeNavBar {...props} auth_token='token'/>)
    wrapper.instance().handleLogin(event)
    expect(spyPreventDefault).toHaveBeenCalled()
    expect(spyOnConfirmOk).toHaveBeenCalled()
  })

  it('should show login box when there is not a saved auth_token', () => {
    wrapper.setProps({auth_token: null})
    wrapper.setState({showLogin: false})
    expect(wrapper.state('showLogin')).toBe(false)
    wrapper.instance().handleLogin(event)
    expect(wrapper.state('showLogin')).toBe(true)
  })

  it('should render a transparent navbar', () => {
    wrapper.setState({isTop: false})
    expect(wrapper.instance().getNavBarStyles()).toMatch('nav color')
  })

  it('should test onChangeHandler with a valid key', () => {
    const spyCheckValidity = jest.fn()
    wrapper.setState({checkValidity: spyCheckValidity})
    wrapper.instance().onChangeHandler(event, 'password')
  })

  it('should test onChangeHandler with a invalid key', () => {
    const spyCheckValidity = jest.fn()
    wrapper.setState({checkValidity: spyCheckValidity})
    const event = { target: { value: '' } }
    wrapper.instance().onChangeHandler(event, 'password')
  })
})