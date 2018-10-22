import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ReceiptList, mapStateToProps, mapDispatchToProps } from '../Receipt/ReceiptList/ReceiptList'
import NavBar from '../UI/Navbar/Navbar'
import MenuButton from '../UI/Button/MenuButton/MenuButton'
jest.mock('../../services/getAllReceipts')

configure({adapter: new Adapter()})

describe("Testing <ReceiptList/>", () => {
  
  let wrapper = null

  const spyComponentDidMount = jest.spyOn(ReceiptList.prototype, 'componentDidMount')  
  const spyOnReceiptsAdded = jest.fn()
  const spyHistoryPush = jest.fn()
  const props = {
    onReceiptsAdded: spyOnReceiptsAdded,
    history: {
      push: spyHistoryPush
    }
  }

  beforeEach(() => {
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
    done()
  })

  it('should call dispatch for saving the receipts', () => {
    expect(spyOnReceiptsAdded).toHaveBeenCalled()
  })

  it('should call history.push', () => {
    wrapper.instance().onNewReportHandler()
    expect(spyHistoryPush).toHaveBeenCalled()
  })

  it('should test mapStateToProps', () => {
    const initialState = {
      receipts: ["test"]
    }
    expect(mapStateToProps(initialState).receipts).toEqual(["test"])
  })

  it('should test mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onReceiptsAdded()
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'ADD_RECEIPTS'})
  })

  it('should find NavBar', () => {
    expect(wrapper.find(NavBar).exists()).toBe(true)
  })

  it('should find MenuButton', () => {
    expect(wrapper.find(MenuButton).exists()).toBe(true)
  })
  
  it('should set newReceipt state to false', () => {
    wrapper.setState({newReceipt: false})
    const instance = wrapper.instance()
    expect(wrapper.state('newReceipt')).toBe(false)
    instance.onCloseReceiptAdder()
    expect(wrapper.state('newReceipt')).toBe(false)
  })

  it('should toggle newReceipt', () => {
    wrapper.setState({newReceipt: false})
    const instance = wrapper.instance()
    expect(wrapper.state('newReceipt')).toBe(false)
    instance.onToggleNewReceipt()
    expect(wrapper.state('newReceipt')).toBe(true)
    instance.onToggleNewReceipt()
    expect(wrapper.state('newReceipt')).toBe(false)
  })

  it('should set clickedMenuButton state to true', () => {
    wrapper.setState({clickedMenuButton: false})
    const instance = wrapper.instance()
    expect(wrapper.state('clickedMenuButton')).toBe(false)
    instance.onClickMenuButton()
    expect(wrapper.state('clickedMenuButton')).toBe(true)
  })

  it('should toggle rotate state', () => {
    wrapper.setState({rotate: false})
    const instance = wrapper.instance()
    expect(wrapper.state('rotate')).toBe(false)
    instance.onClickMenuButton()
    expect(wrapper.state('rotate')).toBe(true)
    instance.onClickMenuButton()
    expect(wrapper.state('rotate')).toBe(false)
  }) 
}) 