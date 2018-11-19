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
      minLength: 4,
      maxLength: 15
    }
  },
  cnpj: {
    name: 'CNPJ',
    value: '',
    type: 'text',
    valid: false,
    editable: false,
    touched: false,
    placeholder: 'xx.xxx.xxx/xxxx-xx',
    validation: {
      required: true,
      minLength: 14,
      maxLength: 14
    }
  },
  emission_date: {
    name: 'Data',
    value: '',
    type: 'text',
    valid: false,
    editable: false,
    touched: false,
    placeholder: 'yyyy/mm/dd',
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
      minLength: 3,
      maxLength: 15
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
      minLength: 1,
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
      minLength: 1,
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
      maxLength: 15
    }
  }
}
export default receiptInputs