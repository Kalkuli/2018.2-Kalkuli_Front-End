import Confirmation from '../UI/Confirmation/Confirmation'

describe('Testing <Confirmation />', () => {
    
    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<Confirmation />)
    })

    it('should render the confirm area', () => {
        expect(wrapper.find('.confirm-area')).toHaveLength(1)
    })
})