import '../../../services/__mocks__/matchMedia'
import { ReceiptList, mapStateToProps, mapDispatchToProps } from '../../Receipt/ReceiptList/ReceiptList'
import NavBar from '../../UI/Navbar/Navbar'
import MenuButton from '../../UI/Button/MenuButton/MenuButton'
jest.mock('../../../services/getAllReceipts.js')

describe("Testing <ReceiptList/>", () => {

  const spyOnTagsAdded = jest.fn()
  const spyOnReceiptsAdded = jest.fn()

  const props = {
    onTagsAdded: spyOnTagsAdded,
    onReceiptsAdded: spyOnReceiptsAdded
  }
  
  let wrapper = null
  beforeEach(() => {
    window.matchMedia = jest.fn(query => ({ 
      matches: query.indexOf('(min-width: 800px)') !== -1, 
    })); 
    wrapper = shallow(<ReceiptList {...props} />)
  })

  it('should find NavBar', () => {
    expect(wrapper.find(NavBar).exists()).toBe(true)
  })

  it('should find MenuButton', () => {
    expect(wrapper.find(MenuButton).exists()).toBe(true)
  })

  it('should test mapStateToProps', () => {
    const initialState = {
      receipts: [],
      tags: []
    }
    expect(mapStateToProps(initialState).receipts).toEqual([])
    expect(mapStateToProps(initialState).tags).toEqual([])
  })

  it('should test mapDispatchToProps for dispatching onReceiptsAdded', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onReceiptsAdded()
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'ADD_RECEIPTS'})
  })

  it('should test updateSearch', () => {
    const event = {
      target: {
        value: 'Pipoca'
      }
    }
    wrapper.instance().updateSearch(event)
    expect(wrapper.state('search')).toMatch('Pipoca')
  })

  it('should fetch all receipts', () => {
    wrapper.instance().fetchReceipts()
  })
}) 