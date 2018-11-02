import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Register from '../Register/Form'
import registerInputs from '../../helpers/registerInputs'

configure({
    adapter: new Adapter()
})

describe('Testing <Register/>', () => {
    let wrapper = null

    const rules = {
        required: true,
        minLength: 2,
        maxLength: 20        
    }

    const rulesEmail = {
        required: true,
        aroba: '@',
        minLength: 5,
        maxLength: 20
    }

    const rulesPassword = {
        required: true,
        minLength: 8,
        maxLength: 16,
        pass: true
    }

    const password = '123456789'

    const registerInputValid = {
        admName: {
            name: '*Nome do Administrador:',
            value: 'Nome da empresa',
            id:'admName',
            type: 'text',
            valid: true,
            touched: false,
            validation: {
                required: true,
                minLength: 2,
                maxLength: 20,
                sms: 'Campo não pode estar vazio',
                onMause: false 
            }
        }
    }

    const registerInputInvalid = {
        admName: {
            name: '*Nome do Administrador:',
            value: 'n',
            id:'admName',
            type: 'text',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 2,
                maxLength: 20,
                sms: 'Campo não pode estar vazio',
                onMause: false 
            }
        }
    }

    let changeInputColorValid = {
        color: '#0F8891'
    }

    const changeInputColorInvalid = {
        color: 'red'
    }

    beforeEach(() => {
        wrapper = shallow(<Register/>)
    });

    it('should call focusHandler', () => {
        wrapper.instance().focusHandler()
    });

    it('should call blurHandler', () => {
        wrapper.instance().blurHandler()
    });

    it('should call onFailOK', () => {
        wrapper.instance().onFailOK()
    });

    it('should call submitInputs', () => {
        wrapper.instance().submitInputs()
    });

    it('should call onChangeHandler', () => {
        wrapper.instance().onChangeHandler({'target':{'value':''}}, 'admName')
    })

    it('should test a valid input Adm name value', () => {
        expect(wrapper.instance().checkValidity('Valor Válido', rules)).toBe(true)
    })
    
    it('should test an invalid input value', () => {
        expect(wrapper.instance().checkValidity('', rules)).toBe(false)
    })

    it('should test a valid input email value', () => {
        expect(wrapper.instance().checkValidity('exemplo@exemplo.com', rulesEmail)).toBe(true)
    })

    it('should test a valid input passaword value', () => {
        expect(wrapper.instance().checkValidity(password, rulesPassword)).toBe(true)
    })

    it('should test change color to valid', () =>{
        wrapper.instance().chooseStyle(registerInputValid, 'admName')
        expect(wrapper.find(changeInputColorValid))
    })

    it('should test change color to invalid', () =>{
        wrapper.instance().chooseStyle(registerInputInvalid, 'admName')
        expect(wrapper.find(changeInputColorInvalid))
    })
    
    
    
});

