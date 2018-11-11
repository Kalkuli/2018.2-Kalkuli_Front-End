import TagItem from '../../components/UI/TagItem/TagItem'

describe('Testing <TagItem />', () => {
  let wrapper = null
  const spyOnClickHandler = jest.fn()
  const props = {
    onClickHandler: spyOnClickHandler
  }

  beforeEach(() => {
    wrapper = shallow(<TagItem {...props}/>)
  })

  it('should call props.onClickHandler', () => {
    wrapper.find('.tag-item').simulate('click')
    expect(spyOnClickHandler).toHaveBeenCalled()
  })
})