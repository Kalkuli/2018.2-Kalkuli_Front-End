const registerInputsCompany = {
    propertyName: {
        name: '*Razão social da Empresa:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 20
        }
    },
    companyEmail: {
        name: '*Email da Empresa:',
        value: '',
        type: 'email',
        valid: false,
        touched: false,
        validation: {
            required: true,
            aroba: '@',
            minLength: 5,
            maxLength: 20
        }
    },
    companyName: {
        name: 'Nome Fantasia da Empresa:',
        value: '',
        type: 'text',
        valid: true,
        touched: false,
    },
    companyPhone: {
        name: 'Telefone Empresarial:',
        value: '',
        type: 'tel',
        valid: true,
        touched: false,
    },
    CNPJ: {
        name: 'CNPJ da Empresa:',
        value: '',
        type: 'text',
        valid: true,
        touched: false,
    },
    CEP: {
        name: 'CEP da Empresa:',
        value: '',
        type: 'text',
        valid: true,
        touched: false,
    },
    city: {
        name: 'Cidade:',
        value: '',
        type: 'text',
        valid: true,
        touched: false,
    },
    state: {
        name: 'Estado:',
        value: '',
        type: 'text',
        valid: true,
        touched: false,
    }
}
export default registerInputsCompany;