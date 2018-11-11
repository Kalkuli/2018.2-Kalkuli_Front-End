const receiptInputs = {
  title: {
    name: 'Título',
    value: '',
    type: 'text',
    valid: false,
    editable: false,
    touched: false,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    }
  },
  cnpj: {
    name: 'CNPJ',
    value: '',
    type: 'text',
    valid: false,
    editable: false,
    touched: false,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    }
  },
  emission_date: {
    name: 'Data',
    value: '',
    type: 'text',
    valid: false,
    editable: false,
    touched: false,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    }
  },
  emission_place: {
    name: 'Local',
    value: '',
    type: 'text',
    valid: false,
    editable: false,
    touched: false,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    }
  },
  tax_value: {
    name: 'Impostos',
    value: '',
    type: 'text',
    valid: false,
    editable: false,
    touched: false,
    validation: {
      required: true,
      minLength: 2,
      maxLength: 10
    }
  },
  total_price: {
    name: 'Total',
    value: '',
    type: 'text',
    valid: false,
    editable: false,
    touched: false,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    }
  },
  description: {
    name: 'Descrição',
    value: '',
    type: 'text',
    valid: false,
    editable: false,
    touched: false,
    validation: {
      required: true,
      minLength: 5,
      maxLength: 10
    }
  }
}
export default receiptInputs