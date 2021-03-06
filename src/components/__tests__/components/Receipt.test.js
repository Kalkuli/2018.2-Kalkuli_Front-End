import Receipt from '../../UI/Receipt/Receipt'

describe('Testing <Receipt />', () => {

  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<Receipt />)
  })

  it('should mock a function', () => {
    const spy = jest.fn(x => x);
    wrapper = shallow(<Receipt onClickHandler={spy}/>)
    wrapper.simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('should render follow receipt className', () => {
    expect(wrapper.find('.receipt').exists()).toBe(true)
  })

  it('should toggle the className to large', () => {
    wrapper.setProps({size: 'large'})
    expect(wrapper.find('.receipt--large')).toHaveLength(1)
  })

  it('should toggle the className to small', () => {
    wrapper.setProps({size: 'small'})
    expect(wrapper.find('.receipt--small')).toHaveLength(1)
  })
})