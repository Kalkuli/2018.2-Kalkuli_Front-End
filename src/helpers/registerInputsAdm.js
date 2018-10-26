const registerInputs = {
    admName: {
        name: 'Nome do Administrador:',
        value: '',
        id:'admName',
        type: 'text',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    },
    admEmail: {
        name: 'Email do Administrador:',
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
    admPassword: {
        name: 'Senha do Administrador:',
        value: '',
        type: 'password',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    },
    confPassword: {
        name: 'Confirmar Senha:',
        value: '',
        type: 'password',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 5,
            maxLength: 10
        }
    }
}
export default registerInputs;