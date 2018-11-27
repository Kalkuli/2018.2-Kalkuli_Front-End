import '../../../services/__mocks__/matchMedia'
import NavBar from '../../UI/Navbar/Navbar'
import { Link } from 'react-router-dom'
jest.mock('../../../services/logUserOut.js')

describe('Testing <NavBar />', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it('should find <Link />', () => {
    expect(wrapper.find(Link).exists()).toBe(true)
  })

  it('should be a small Device', () => {
    wrapper.setState(() => {
      return({smallDevice: true})
    })
    expect(wrapper.find('.sidebar').exists()).toBeTruthy()
  })

  it('sidebar should be open', () => {
    wrapper.setState(() => {
      return({smallDevice: true})
    })
    wrapper.setState(() => {
      return({isOpen: true})
    })
    expect(wrapper.find('.Open').exists()).toBeTruthy()
  })

  it('sidebar should be close', () => {
    wrapper.setState(() => {
      return({smallDevice: true})
    })
    wrapper.setState(() => {
      return({isOpen: false})
    })
    expect(wrapper.find('.Close').exists()).toBeTruthy()
  })

  it('should test onClickMenuHandler', () => {
    wrapper.setState(() => {
      return({smallDevice: true})
    })
    wrapper.setState(() => {
      return({isOpen: false})
    })
    wrapper.setState(() => {
      return({isOpen: true})
    })
    wrapper.instance().onClickMenuHandler()
    expect(wrapper.state('isOpen')).toBe(false)
  })

  it('should log user out', async() => {
    await wrapper.instance().logUserOut()
    expect(localStorage.removeItem).toHaveBeenCalledWith('auth_token')
    expect(localStorage.removeItem).toHaveBeenCalledWith('company_id')
  })
})