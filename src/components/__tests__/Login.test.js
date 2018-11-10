import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../Login/Login'
import Confirmation from '../UI/Confirmation/Confirmation'

configure({adapter: new Adapter()})

describe('Testing <Login />', () => { 
  let wrapper = null
  let props = {
    inputs: {
      email: {
        color: "#353535",
        name: "E-mail",
        touched: false,
        type: "email",
        valid: false,
        validation: {
          aroba: "@", required: true, minLength: 5, maxLength: 30
        },
        value: ""
      },
      senha: {
        color: "#353535",
        name: "Senha",
        touched: false,
        type: "password",
        valid: false,
        validation: {
          required: true, minLength: 5, maxLength: 30
        },
        value: ""
      }
    },
  }
  beforeEach(() => {
      wrapper = shallow(<Login {...props}/>)
  })
  
  it('should find login__form__inputs', () => {
    expect(wrapper.find('.login__form__inputs').exists()).toBe(true)
  })

  it('should warn user when trying to login with no valid user', () => {
    wrapper.setProps({registration: 'fail'})
    expect(wrapper.find(Confirmation).exists()).toBe(true)
  })
})
