import BackDrop from '../../UI/BackDrop/BackDrop'

describe('Testing <BackDrop />', () => {
  
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<BackDrop />)
  })

  it('should show BackDrop when props.show is true', () => {
    wrapper.setProps({show: true})
    expect(wrapper.find('.Backdrop').exists()).toBe(true)
  })

  it('should not show BackDrop when props.show is false', () => {
    wrapper.setProps({show: false})
    expect(wrapper.find('.Backdrop').exists()).toBe(false)
  })
})