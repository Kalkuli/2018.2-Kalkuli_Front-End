import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import List from '../Receipt/ReceiptList/List'
import ReceiptView from '../Receipt/ReceiptView/ReceiptView'
import BackDrop from '../UI/BackDrop/BackDrop'

configure({adapter: new Adapter()})

describe("Testing <List />", () => {
  let wrapper = null
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
    let receipt = {
      "cnpj": "100asd0966",
      "company_id": 0,
      "emission_date": "2018-09-22",
      "emission_place": "aaaaaa",
      "id": 2,
      "tax_value": 20.2,
      "total_price": 123.12
    }
    expect(wrapper.state('selectedReceipt')).toBe(null)
    instance.onOpenPopup(receipt)
    expect(wrapper.state('selectedReceipt')).toBe(receipt)
  })

  it('should teste showModal state by directly invoking method', () => {
    const instance = wrapper.instance()
    expect(wrapper.state('showModal')).toBe(false)
    instance.onOpenPopup()
    expect(wrapper.state('showModal')).toBe(true)
  })
  
/*   it('should', () => {
    expect(wrapper.instance().onClosePopup())
  }) */

})