import '../../services/__mocks__/matchMedia'
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { List, mapStateToProps } from '../Receipt/ReceiptList/List'
import ReceiptView from '../Receipt/ReceiptView/ReceiptView'
import BackDrop from '../UI/BackDrop/BackDrop'

configure({adapter: new Adapter()})

describe("Testing <List />", () => {
  let wrapper = null
  const tags = [
    {'id': 0, 'category': 'Limpeza', 'color': '#424242'}, 
    {'id': 1, 'category': 'Alimentação', 'color': '#fff'}
  ]
  const receipt = {
    "emission_date": "2018-09-22",
    "emission_place": "aqqqqqq",
    "tax_value": 20.20,
    "total_price": 123.12,
    "title": "oi",
    "description": "teste",
    "cnpj": "320490234-002",
  }
  const props = {
    receipts: [{...receipt}],
  }

  beforeEach(() => {
    wrapper = shallow(<List {...props}/>)
  })

  it('should get tag name', () => {
    wrapper.instance().getTagName(2)
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