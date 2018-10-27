const registerInputsCompany = {
    propertyName: {
        name: '*Razão social da Empresa:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
        validation: {
            required: true,
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
            doitCom: '.com'
        }
    },
    companyName: {
        name: 'Nome Fantasia da Empresa:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
    },
    companyPhone: {
        name: 'Telefone Empresarial:',
        value: '',
        type: 'tel',
        valid: false,
        touched: false,
    },
    CNPJ: {
        name: 'CNPJ da Empresa:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
    },
    CEP: {
        name: 'CEP da Empresa:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
    },
    city: {
        name: 'Cidade:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
    },
    state: {
        name: 'Estado:',
        value: '',
        type: 'text',
        valid: false,
        touched: false,
    }
}
export default registerInputsCompany;