import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReceiptView from '../Receipt/ReceiptView/ReceiptView'
import BackDrop from '../UI/BackDrop/BackDrop'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
configure({adapter: new Adapter()})

describe("Testing <ReceiptView />", () => {

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
    wrapper = shallow(<ReceiptView receipt={receipt}/>)
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

})