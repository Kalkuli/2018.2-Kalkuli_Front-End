import '../../services/__mocks__/matchMedia'
import { List, mapStateToProps } from '../Receipt/ReceiptList/List'
import ReceiptView from '../Receipt/ReceiptView/ReceiptView'
import BackDrop from '../UI/BackDrop/BackDrop'
import localStorage from '../../services/__mocks__/localStorage'

jest.mock('../../services/axiosConfig.js')
window.localStorage = localStorage

describe("Testing <List />", () => {
  let wrapper = null
  let tags = [
    {'id': 0, 'category': 'Limpeza', 'color': '#424242'}, 
    {'id': 1, 'category': 'Alimentação', 'color': '#fff'}
  ]
  let receipt = {
    "emission_date": "2018-09-22",
    "emission_place": "aqqqqqq",
    "tax_value": 20.20,
    "total_price": 123.12,
    "title": "oi",
    "description": "teste",
    "cnpj": "320490234-002",
  }
  let props = {
    receipts: [{...receipt}],
    search: 'oi',
  }

  beforeEach(() => {
    wrapper = shallow(<List {...props}/>)
  })

  it('should test filterReceipts finding a receipt by its title', () => {
    wrapper.instance().filterReceipts(props.receipts)
    expect(wrapper.find('.container-receipts__receipt-data').exists()).toBeTruthy()
  })

  it('should find ReceiptView when selecting a receipt from List', () => {
    wrapper.setState({selectedReceipt: true})
    expect(wrapper.find(ReceiptView).exists()).toBe(true)
  })

  it('should find BackDrop', () => {
    expect(wrapper.find(BackDrop).exists()).toBe(true)
  })

  it('should test selectedReceipt state by directly invoking method', () => {
    const instance = wrapper.instance()
    expect(wrapper.state('selectedReceipt')).toBe(null)
    instance.onOpenPopup([receipt, 1])
    expect(wrapper.state('selectedReceipt')).toBe(receipt)
    instance.onClosePopup()
    expect(wrapper.state('selectedReceipt')).toBe(null)
  })

  it('should test showModal state by directly invoking method', () => {
    const instance = wrapper.instance()
    expect(wrapper.state('showModal')).toBe(false)
    instance.onOpenPopup([receipt, 1])
    expect(wrapper.state('showModal')).toBe(true)
    instance.onClosePopup()
    expect(wrapper.state('showModal')).toBe(false)
  })

  it('should test mapStateToProps', () => {
    const initialState = {
      tags: tags
    }
    expect(mapStateToProps(initialState).tags).toEqual(tags)
  })
  
})

describe("Testing <List /> searching teste", () => {
  let wrapper = null
  let tags = [
    {'id': 0, 'category': 'Limpeza', 'color': '#424242'}, 
    {'id': 1, 'category': 'Alimentação', 'color': '#fff'}
  ]
  let receipt = {
    "emission_date": "2018-09-22",
    "emission_place": "aqqqqqq",
    "tax_value": 20.20,
    "total_price": 123.12,
    "title": "oi",
    "description": "teste",
    "cnpj": "320490234-002",
  }
  let props = {
    receipts: [{...receipt}],
    search: 'teste'
  }

  beforeEach(() => {
    wrapper = shallow(<List {...props}/>)
  })

  it('should test filterReceipts finding a receipt by its description', () => {
    wrapper.instance().filterReceipts(props.receipts)
    expect(wrapper.find('.container-receipts__receipt-data').exists()).toBeTruthy()
  })
})

describe("Testing <List /> searching invalid title", () => {
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
  let props = {
    receipts: [{...receipt}],
    search: 'oi123'
  }

  beforeEach(() => {
    wrapper = shallow(<List {...props}/>)
  })

  it('should test filterReceipts not finding a receipt by its title', () => {
    wrapper.instance().filterReceipts(props.receipts)
    expect(wrapper.find('.container-receipts__receipt-data').exists()).toBe(false)
  })
})