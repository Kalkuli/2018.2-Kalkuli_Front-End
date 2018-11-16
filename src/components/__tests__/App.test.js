import '../../services/__mocks__/matchMedia'
import { App, mapStateToProps, mapDispatchToProps } from '../../App'
import { Route } from 'react-router-dom'
import localStorage from '../../services/__mocks__/localStorage'

window.localStorage = localStorage

describe('Testing <App/>', () => {

  const spyOnAddAuthToken = jest.fn()

  let wrapper = null
  const props = {
    onAddAuthToken: spyOnAddAuthToken,
    auth_token: 'token'
  }

  beforeEach(() => {
    wrapper = shallow(<App {...props}/>)
  })

  it('should dispatch onAddAuthToken', () => {
    expect(spyOnAddAuthToken).toHaveBeenCalled()
  })

  it('should guard restrict routes to unloogged users', () => {
    wrapper.setProps({ auth_token: null })
    const restrictedRoute = wrapper.find('dashboard')
    expect(restrictedRoute.exists()).toBe(false)
  })

  it('should render restrict routes to logged users', () => {
    expect(wrapper.find(Route)).toHaveLength(8)
  })

  it('should get a not found when accessing an unknown route', () => {
    const notFoundReturn =  wrapper.instance().notFoundRoute()
    expect(notFoundReturn).toEqual(<h1>Not found</h1>)
  })

  it('should test mapStateToProps for retrieving auth_token', () => {
    const initialState = {
      auth_token: 'token'
    }
    expect(mapStateToProps(initialState).auth_token).toMatch('token')
  })

  it('should test mapDispatchToProps for dispatching onAddAuthToken', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onAddAuthToken()
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'ADD_AUTH_TOKEN'})
  })
})