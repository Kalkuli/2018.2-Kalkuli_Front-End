import '../../services/__mocks__/matchMedia'
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ReceiptList, mapStateToProps, mapDispatchToProps } from '../Receipt/ReceiptList/ReceiptList'
import NavBar from '../UI/Navbar/Navbar'
import MenuButton from '../UI/Button/MenuButton/MenuButton'
jest.mock('../../services/getAllReceipts')
jest.mock('../../services/getAllTags.js')
configure({adapter: new Adapter()})

describe("Testing <ReceiptList/>", () => {
  
  let wrapper = null

  const spyComponentDidMount = jest.spyOn(ReceiptList.prototype, 'componentDidMount')  
  const spyOnReceiptsAdded = jest.fn()
  const spyOnTagsAdded = jest.fn()
  const props = {
    onReceiptsAdded: spyOnReceiptsAdded,
    onTagsAdded: spyOnTagsAdded
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

  it('should test mapStateToProps', () => {
    const initialState = {
      receipts: ["test"]
    }
    expect(mapStateToProps(initialState).receipts).toEqual(["test"])
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

}) 