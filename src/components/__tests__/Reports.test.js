import '../../services/__mocks__/matchMedia'
import Reports from '../Reports/Reports'

describe('Testing <Reports />', () => {
  
  let wrapper = null
  let instance = null
  beforeEach( () => {
    window.matchMedia = jest.fn(query => ({ 
      matches: query.indexOf('(min-width: 800px)') !== -1, 
    }))
    wrapper = shallow(<Reports/>)
    instance = wrapper.instance()
  })

})