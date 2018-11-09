import '../../services/__mocks__/matchMedia'
import { ReceiptList, mapStateToProps, mapDispatchToProps } from '../Receipt/ReceiptList/ReceiptList'
import NavBar from '../UI/Navbar/Navbar'
import MenuButton from '../UI/Button/MenuButton/MenuButton'
jest.mock('../../services/getAllReceipts')
jest.mock('../../services/getAllTags.js')

describe("Testing <ReceiptList/>", () => {
  
  let wrapper = null

  const spyComponentDidMount = jest.spyOn(ReceiptList.prototype, 'componentDidMount')  
  const spyOnReceiptsAdded = jest.fn()
  const spyOnTagsAdded = jest.fn()
  const props = {
    onReceiptsAdded: spyOnReceiptsAdded,
    onTagsAdded: spyOnTagsAdded,
  }
  
  beforeEach(() => {
    window.matchMedia = jest.fn(query => ({ 
      matches: query.indexOf('(min-width: 800px)') !== -1, 
    })); 
    wrapper = shallow(<ReceiptList {...props}/>)
  })

  afterEach(() => {
    spyComponentDidMount.mockClear()
  })
  
  it('should componentDidMount', () => {
    wrapper.instance().componentDidMount()
    expect(spyComponentDidMount).toHaveBeenCalled()
  })

  it('should test getAllReceipts', (done) => {
    wrapper.instance().fetchReceipts()
    done()
  })

  it('should test getAllTags', (done) => {
    wrapper.instance().fetchTags()
    done()
  })

  it('should call dispatch for saving the receipts', () => {
    expect(spyOnReceiptsAdded).toHaveBeenCalled()
  })

  it('should call dispatch for saving the tags', () => {
    expect(spyOnTagsAdded).toHaveBeenCalled()
  })

  it('should test mapDispatchToProps for dispatching onReceiptsAdded', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onReceiptsAdded()
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'ADD_RECEIPTS'})
  })

  it('should test mapDispatchToProps for dispatching onTagsAdded', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onTagsAdded()
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'ADD_TAGS'})
  })

  it('should find NavBar', () => {
    expect(wrapper.find(NavBar).exists()).toBe(true)
  })

  it('should find MenuButton', () => {
    expect(wrapper.find(MenuButton).exists()).toBe(true)
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

  it('should test filterReceipts with existing receipts and match title', () => {
    const receipts = [{
      title: 'Banana',
      description: 'Fruta'
    },
    {
      title: 'Pipoca',
      description: 'Derivado de milho'
    }]
    const object = [{
      title: 'Banana',
      description: 'Fruta'
    }]
    wrapper.setState({search: 'Banana'})
    expect(wrapper.instance().filterReceipts(receipts)).toMatchObject(object)
  })

  it('should test filterReceipts with existing receipts and match description', () => {
    const receipts = [{
      title: 'Banana',
      description: 'Fruta'
    },
    {
      title: 'Pipoca',
      description: 'Derivado de milho'
    }]
    const object = [{
      title: 'Banana',
      description: 'Fruta'
    }]
    wrapper.setState({search: 'Fruta'})
    expect(wrapper.instance().filterReceipts(receipts)).toMatchObject(object)
  })

}) 