import Login from '../../Login/Login'
import Confirmation from '../../UI/Confirmation/Confirmation'
import InputField from '../../UI/Input/InputField'

describe('Testing <Login />', () => { 
  const spyOnChangeHandler = jest.fn()
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
    onChangeHandler: spyOnChangeHandler
  }
  let wrapper = null
  beforeEach(() => {
    wrapper = mount(<Login {...props}/>)
  })
  
  it('should find login__form__inputs', () => {
    expect(wrapper.find('.login__form__inputs').exists()).toBe(true)
  })

  it('should warn user when trying to login with no valid user', () => {
    wrapper.setProps({registration: 'fail'})
    expect(wrapper.find(Confirmation).exists()).toBe(true)
  })

  it('should simulate onChange when typing in email field', () => {
    const event = {}
    wrapper.find(InputField).at(0).simulate('change', event)
    expect(spyOnChangeHandler).toHaveBeenCalled()
  })

  it('should simulate onChange when typing in password field', () => {
    const event = {}
    wrapper.find(InputField).at(1).simulate('change', event)
    expect(spyOnChangeHandler).toHaveBeenCalled()
  })
})
