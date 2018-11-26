import { HomeNavBarLinks, mapStateToProps } from '../../UI/Navbar/HomeNavBar/HomeNavBarLinks'
import Scrollchor from 'react-scrollchor'

describe('Testing <HomeNavBarLinks/>', () => {
  
  const spyHandleLogin = jest.fn()
  const event = { 
    taget: { 
      value: '' 
    } 
  } 
  const props = { 
    handleLogin: spyHandleLogin,
  }
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<HomeNavBarLinks {...props}/>)
  })

  it('it should test if the event is being passed', () => {
    wrapper.find('a.nav__link').first().simulate('click', event)
  })

  it('should simulate a logged in user', () => {
    wrapper.setProps({ auth_token: 'token' })
    expect(wrapper.find('.nav__link').text()).toEqual('Dashboard')  
  })
  
  it('should simulate a not logged in user', () => {
    wrapper.setProps({ auth_token: null })
    expect(wrapper.find('.nav__link').text()).toEqual('Log In')  
  })

  it('should simulate that the user is in a big screen', () => {
    wrapper.setProps({ size: "large" })
    expect(wrapper.find(Scrollchor)).toHaveLength(2)
  })

  it('should test mapStateToProps for retrieving auth_token', () => {
    const initialState = {
      auth_token: 'token'
    }
    expect(mapStateToProps(initialState).auth_token).toMatch('token')
  })
})