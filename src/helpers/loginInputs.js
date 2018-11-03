const loginInputs = {
  email: {
    name: 'E-mail',
    value: '',
    type: 'email',
    valid: false,
    touched: false,
    validation: {
      aroba: '@',
      required: true,
      minLength: 5,
      maxLength: 30
    }
  },
  password: {
    name: 'Senha',
    value: '',
    type: 'password',
    valid: false,
    touched: false,
    validation: {
      required: true,
      minLength: 8,
      maxLength: 20
    }
  },
}
export default loginInputs