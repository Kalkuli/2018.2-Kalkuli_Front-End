import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ReceiptCompare } from '../Receipt/ReceiptCompare/ReceiptCompare'
import BaseButton from '../UI/Button/BaseButton/BaseButton'

configure({adapter: new Adapter()})

describe('Testing <ReceiptCompare/>', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<ReceiptCompare />)
  })

  it('should', () => {

  })
})