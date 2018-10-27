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
    }
}
export default registerInputs;