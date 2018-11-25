import DropDown from '../../UI/DropDown/DropDown'
import TagItem from '../../UI/TagItem/TagItem'
import SearchBar from '../../UI/SearchBar/SearchBar'

describe('Testing <DropDown/>', () => {
  let wrapper = null
  const spyOnSelectedTagHandler = jest.fn()
  const props = {
    selectedTag: {
      'color': '#fff', 
      'id': 1, 
      'category':'oi'
    },
    items: [{
      'color': '#fff', 
      'id': 1, 
      'category':'oi'
    }],
    onSelectedTagHandler: spyOnSelectedTagHandler
  }

  beforeEach(() => {
    wrapper = shallow(<DropDown {...props}/>)
  })

  it('should find TagItem', () => {
    expect(wrapper.find(TagItem).exists()).toBe(true)
  })

  it('should render default message when no category was found', () => {
    wrapper.setProps({selectedTag: { category: null }})
    const wrapperItem = wrapper.find('.select-box--selected-item')
    expect(wrapperItem.text()).toEqual('Adicionar')
  })

  it('should ', () => {
    wrapper.setProps({showItems: true})
    expect(wrapper.find(TagItem).exists()).toBe(true)
  })
})