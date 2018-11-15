import HomeNavBarLinks from '../UI/Navbar/HomeNavBar/HomeNavBarLinks'

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
})