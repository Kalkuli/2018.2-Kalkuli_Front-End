import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReceiptList from '../Receipt/ReceiptList/ReceiptList'
import NavBar from '../UI/Navbar/Navbar'
import MenuButton from '../UI/Button/MenuButton/MenuButton'
import mockAxios from 'axios'

configure({adapter: new Adapter()})

describe("Testing <ReceiptList/>", () => {

  let wrapper = null
  /* let receipt = {
    "cnpj": "100asd0966",
    "company_id": 0,
    "emission_date": "2018-09-22",
    "emission_place": "aaaaaa",
    "id": 2,
    "tax_value": 20.2,
    "total_price": 123.12
  } */

  beforeEach(() => {
    wrapper = shallow(<ReceiptList />)
  })
  
  /* it('should test Axios get', async() => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          data: {
            receipts: ["oioi"]
          }
        }
    }))
    const instance = wrapper.instance()
    //const response = await instance.getAllReceipts()
    //console.log(response)
  }) */

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