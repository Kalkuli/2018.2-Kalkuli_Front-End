import '../../../services/__mocks__/matchMedia'
import { MenuButton, mapDispatchToProps } from '../../UI/Button/MenuButton/MenuButton'
jest.mock('../../../services/getAllReceipts.js')

describe('Testing <MenuButton/>', () => {
  
  let wrapper = null
  let instance = null

  const spyHistoryPush = jest.fn()
  const spyOnReceiptsAdded = jest.fn()
  const props = {
    history: {
      push: spyHistoryPush,
    },
    onReceiptsAdded: spyOnReceiptsAdded    
  }

  beforeEach(() => {
    wrapper = shallow(<MenuButton {...props}/>)
    instance = wrapper.instance()
  })
  
  it('it should setclickedMenuButton to true when clicking for the first time', () => {
    wrapper.setState({clickedMenuButton: false})
    expect(wrapper.state('clickedMenuButton')).toBe(false)
    instance.onClickMenuButton()
    expect(wrapper.state('clickedMenuButton')).toBe(true)
  })

  it('it should not setclickedMenuButton to true when not clicking for the first time', () => {
    wrapper.setState({clickedMenuButton: true})
    expect(wrapper.state('clickedMenuButton')).toBe(true)
    instance.onClickMenuButton()
    expect(wrapper.state('clickedMenuButton')).toBe(true)
  })

  it('should set newReceipt to true when calling onNewReceiptHandler', () => {
    wrapper.setState({newReceipt: false})
    instance.onNewReceiptHandler()
    expect(wrapper.state('newReceipt')).toBe(true)
  })

  it('should toggle newReceipt when calling onToggleNewReceipt', () => {
    wrapper.setState({newReceipt: false})
    instance.onToggleNewReceipt()
    expect(wrapper.state('newReceipt')).toBe(true)
    instance.onToggleNewReceipt()
    expect(wrapper.state('newReceipt')).toBe(false)
  })

  it('should push the route when calling onNewReportHandler', () => {
    instance.onNewReportHandler()
    expect(spyHistoryPush).toHaveBeenCalled()
  })

  it('should set newReceipt to false when calling onCloseReceiptAdder', () => {
    wrapper.setState({newReceipt: true})
    instance.onCloseReceiptAdder()
    expect(wrapper.state('newReceipt')).toBe(false)
  })

  it('should re-populate store when fetching receipts', (done) => {
    wrapper.instance().onConfirmOk()
    const state = wrapper.instance().state
    expect(state.newReceipt).toBe(false)
    done()
  })

  it('should test mapDispatchToProps for dispatching onReceiptsAdded', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onReceiptsAdded()
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'ADD_RECEIPTS'})
  })
})
