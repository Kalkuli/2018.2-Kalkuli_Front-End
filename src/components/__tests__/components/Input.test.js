import Input from '../../UI/Input/Input'

describe('Testing <Input />', () => {

    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<Input />)
    })
    
    it('should have find input-area__input className just once', () => {
        expect(wrapper.find('.input-area__input')).toHaveLength(1)
    })
    
    it('should return input-area__input--valid', () => {
        wrapper.setProps({editable: true, valid: true})
        expect(wrapper.find('.input-area__input--valid').exists()).toBe(true)
    })

    it('should return input-area__input--valid', () => {
        wrapper.setProps({editable: true, valid: false, touched: true})
        expect(wrapper.find('.input-area__input--invalid').exists()).toBe(true)
    })

    it('should return input-area__input--edit', () => {
        wrapper.setProps({editable: true})
        expect(wrapper.find('.input-area__input--edit')).toHaveLength(1)
    })


})