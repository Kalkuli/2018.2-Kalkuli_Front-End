const registerInputsCompany = {
    propertyName: {
        name: 'Razão social da Empresa:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    },
    companyEmail: {
        name: 'Email da Empresa:',
        value: '',
        type: 'email',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    },
    companyName: {
        name: 'Nome Fantasia da Empresa:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    },
    companyPhone: {
        name: 'Telefone Empresarial:',
        value: '',
        type: 'tel',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    },
    CNPJ: {
        name: 'CNPJ da Empresa:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    },
    CEP: {
        name: 'CEP da Empresa:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    },
    city: {
        name: 'Cidade:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    },
    state: {
        name: 'Estado:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    }
}
export default registerInputsCompany;