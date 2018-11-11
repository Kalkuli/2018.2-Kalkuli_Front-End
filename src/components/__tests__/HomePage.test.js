import '../../services/__mocks__/matchMedia'
import HomePage from '../HomePage/HomePage'
import SignUp from '../UI/Button/SignUp/SignUp'
import HomeNavBar from '../UI/Navbar/HomeNavBar/HomeNavBar'

describe('Testing <HomePage />', () => {
  
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  })

  it('should find header section', () => {
    expect(wrapper.find('.header')).toHaveLength(1)
  })

  it('should find about section', () => {
    expect(wrapper.find('.about')).toHaveLength(1)
  })

  it('should find call section', () => {
    expect(wrapper.find('.call')).toHaveLength(1)
  })

  it('should find feature section', () => {
    expect(wrapper.find('.feature')).toHaveLength(1)
  })

  it('should find <CadastreEmpresa />', () => {
    expect(wrapper.find(SignUp).exists()).toBe(true)
  })

  it('should find <HomeNavBar />', () => {
    expect(wrapper.find(HomeNavBar)).toHaveLength(1)
  })
})