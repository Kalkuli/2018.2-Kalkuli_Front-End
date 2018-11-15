import Confirmation from '../UI/Confirmation/Confirmation'

describe('Testing <Confirmation />', () => {
    
    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<Confirmation />)
    })

    it('should render the confirm area', () => {
        expect(wrapper.find('.confirm-area')).toHaveLength(1)
    })

    it('should test props.valid === done', () => {
        var props = {
            valid: 'done'
        }
        wrapper = shallow(<Confirmation {...props} />)
        expect(wrapper.find('.confirm-icon'))
    })

    it('should test props.valid !== done', () => {
        var props = {
            valid: 'error'
        }
        wrapper = shallow(<Confirmation {...props} />)
        expect(wrapper.find('.error-icon'))
    })
})