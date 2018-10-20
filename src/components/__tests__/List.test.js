import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from '../Receipt/ReceiptList/List'
import ReceiptView from '../Receipt/ReceiptView/ReceiptView'
import BackDrop from '../UI/BackDrop/BackDrop'
import Receipt from '../UI/Receipt/Receipt'

configure({adapter: new Adapter()})

describe("Testing <List />", () => {
  let wrapper = null
  let receipt = {
    "cnpj": "100asd0966",
    "company_id": 0,
    "emission_date": "2018-09-22",
    "emission_place": "aaaaaa",
    "id": 2,
    "tax_value": 20.2,
    "total_price": 123.12
  }

  beforeEach(() => {
    wrapper = shallow(<List receipts={[{
      "cnpj": "100asd0966",
      "company_id": 0,
      "emission_date": "2018-09-22",
      "emission_place": "aaaaaa",
      "id": 2,
      "tax_value": 20.2,
      "total_price": 123.12
    }]}/>)
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
    instance.onOpenPopup(receipt)
    expect(wrapper.state('selectedReceipt')).toBe(receipt)
    instance.onClosePopup()
    expect(wrapper.state('selectedReceipt')).toBe(null)
  })

  it('should test showModal state by directly invoking method', () => {
    const instance = wrapper.instance()
    expect(wrapper.state('showModal')).toBe(false)
    instance.onOpenPopup()
    expect(wrapper.state('showModal')).toBe(true)
    instance.onClosePopup()
    expect(wrapper.state('showModal')).toBe(false)
  })
  
  it('should', () => {
    const instance = wrapper.instance()
    instance.onOpenPopup(receipt)
  })
 
})