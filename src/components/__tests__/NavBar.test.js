import '../../services/__mocks__/matchMedia'
import NavBar from '../UI/Navbar/Navbar'
import { Link } from 'react-router-dom'

describe('Testing <NavBar />', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<NavBar />)
  })

  it('should find <Link />', () => {
    expect(wrapper.find(Link).exists()).toBe(true)
  })
})