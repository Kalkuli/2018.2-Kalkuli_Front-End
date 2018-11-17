import Loader from '../../UI/Loader/Loader'

describe('Testing <Loader /> with props', () => {
    let wrapper = null
    let instance = null

    beforeEach(() => {
        wrapper = shallow(<Loader />)
        instance = wrapper.instance()
    })

    it('should test loader for reports', () => {
        const props = {
            type: 'loader_reports'
        }
        wrapper = shallow(<Loader {...props} />)
        expect(wrapper.find('.loader_reports').exists()).toBeTruthy()
    })

    it('should test loader for reports', () => {
        expect(wrapper.find('.loader_reports').exists()).toBeFalsy()
    })
})