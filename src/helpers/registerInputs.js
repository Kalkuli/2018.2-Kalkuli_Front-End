const registerInputs = {
    admName: {
        name: '*Nome do Administrador:',
        value: '',
        id:'admName',
        type: 'text',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 20
        }
    },
    admEmail: {
        name: '*Email do Administrador:',
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
    admPassword: {
        name: '*Senha do Administrador:',
        value: '',
        type: 'password',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 8,
            maxLength: 16,
            pass: true
        }
    },
    confPassword: {
        name: '*Confirmar Senha:',
        value: '',
        type: 'password',
        valid: false,
        touched: false,
        validation: {
            required: true,
            confPass: true 
        }
    },
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
export default registerInputs;