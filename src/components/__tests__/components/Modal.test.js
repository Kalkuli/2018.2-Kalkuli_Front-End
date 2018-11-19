import Modal from '../../UI/Modal/Modal'

describe('Testing <Modal />', () => {

    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<Modal />)
    })

    it('should have find modal className just once', () => {
        expect(wrapper.find('.modal')).toHaveLength(1)
    })

    it('should show the modal', () => {
        wrapper.setProps({show: true})
        expect(wrapper.find('.show')).toHaveLength(1)
    })
})