import '../../../services/__mocks__/matchMedia'
import { List, mapStateToProps } from '../../Receipt/ReceiptList/List'
import ReceiptView from '../../Receipt/ReceiptView/ReceiptView'
import BackDrop from '../../UI/BackDrop/BackDrop'

describe("Testing <List />", () => {
  
  const tags = [
    {id: 1, category: 'Limpeza', color: '#424242'}, 
    {id: 2, category: 'Alimentação', color: '#fff'}
  ]

  let receipt = {
    "emission_date": "2018-09-22",
    "emission_place": "aqqqqqq",
    "tax_value": 20.20,
    "total_price": 123.12,
    "title": "oi",
    "description": "teste",
    "cnpj": "320490234-002",
    "tag_id": 1
  }
  
  let props = {
    receipts: [{...receipt}],
    search: 'oi',
  }

  let wrapper = null
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

  it('should test filterReceipts finding a receipt by its description', () => {
    var props = {
      receipts: [{...receipt}],
      search: 'teste'
    }
    wrapper = shallow(<List {...props}/>)
    wrapper.instance().filterReceipts(props.receipts)
    expect(wrapper.find('.container-receipts__receipt-data').exists()).toBeTruthy()
  })

  it('should test filterReceipts not finding a receipt by its title', () => {
    var props = {
      receipts: [{...receipt}],
      search: 'oi123'
    }
    wrapper = shallow(<List {...props}/>)
    wrapper.instance().filterReceipts(props.receipts)
    expect(wrapper.find('.container-receipts__receipt-data').exists()).toBe(false)
  })
  

  it('should get tag name', () => {
    wrapper.setProps({ tags: tags })
    const tagName = wrapper.instance().getTagName(1)
    expect(tagName).toMatch('Limpeza')
  })

  it('should get tag color', () => {
    wrapper.setProps({ tags: tags })
    const tagName = wrapper.instance().getTagColor(1)
    expect(tagName).toMatch('#424242')
  })

})