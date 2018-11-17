import '../../../services/__mocks__/matchMedia'
import ReceiptView from '../../Receipt/ReceiptView/ReceiptView'
import BackDrop from '../../UI/BackDrop/BackDrop'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
jest.mock('../../../services/deleteReceipt')

describe("Testing <ReceiptView />", () => {

  let wrapper = null
  let receipt = {
    "emission_date": "2018-09-22",
    "emission_place": "aqqqqqq",
    "tax_value": 20.20,
    "total_price": 123.12,
    "title": "oi",
    "description": "teste",
    "cnpj": "320490234-002",
  }

  const spyOnClosePopUp = jest.fn()
  const spyOnGetAllReceipts = jest.fn()
  const props = {
    onClosePopup: spyOnClosePopUp,
    onGetAllReceipts: spyOnGetAllReceipts
  }

  beforeEach(() => {
    wrapper = shallow(<ReceiptView {...props} receipt={receipt}/>)
  })

  it('should find BackDrop', () => {
    wrapper.setState({confirmation: true})
    expect(wrapper.find(BackDrop).exists()).toBe(true)
  }) 

  it('should find BaseButton', () => {
    expect(wrapper.find(BaseButton).exists()).toBe(true)
  }) 

  it('should set confirmation state to false', () => {
    wrapper.setState({confirmation: true})
    const instance = wrapper.instance()
    expect(wrapper.state('confirmation')).toBe(true)
    instance.onCancelHandler()
    expect(wrapper.state('confirmation')).toBe(false)
  }) 

  it('should set confirmation state to true', () => {
    wrapper.setState({confirmation: false})
    expect(wrapper.state('confirmation')).toBe(false)
    wrapper.instance().onConfirmationTrue()
    expect(wrapper.state('confirmation')).toBe(true)
  })

  it('should delete the clicked receipt', () => {
    const spyOnDeleteHandler = jest.fn()
    wrapper.instance().onDeleteHandler()
    expect(wrapper.state('confirmation')).toBe(false)
  })
})