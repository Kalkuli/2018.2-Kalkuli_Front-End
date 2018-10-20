import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ReceiptList from '../Receipt/ReceiptList/ReceiptList'
import NavBar from '../UI/Navbar/Navbar'
import MenuButton from '../UI/Button/MenuButton/MenuButton'

configure({adapter: new Adapter()})

describe("Testing <ReceiptList/>", () => {

  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<ReceiptList />)
  })

  it('should test Axios get', async () => {
    const instance = wrapper.instance()
    const reponse = await instance.getAllReceipts()
    console.log(reponse)
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