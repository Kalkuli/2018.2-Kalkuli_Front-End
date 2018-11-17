import SearchBar from '../../UI/SearchBar/SearchBar'

describe('Testing <searchBar/>', () => {
  it('should find search-bar style', () => {
    let wrapper = shallow(<SearchBar />)
    expect(wrapper.find('.search-bar').exists()).toBe(true)
  })
})