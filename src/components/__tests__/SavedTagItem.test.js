import SavedTagItems from '../UI/TagItem/SavedTagItem/SavedTagItem'

describe('Testing <SavedTagItems/>', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<SavedTagItems/>)
  })

  it('should change style when size is small', () => {
    wrapper.setProps({size: 'small'})
    expect(wrapper.find('.saved-tag-item--small').exists()).toBe(true)
  })
})
