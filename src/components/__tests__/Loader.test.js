import Loader from '../UI/Loader/Loader'

describe('Testing <Loader /> with props', () => {
    let wrapper = null
    let instance = null
    const props = {
        type: 'loader_reports'
    }
    beforeEach(() => {
        wrapper = shallow(<Loader {...props} />)
        instance = wrapper.instance()
    })

    it('should test loader for reports', () => {
        expect(wrapper.find('.loader_reports').exists()).toBeTruthy()
    })
})

describe('Testing <Loader /> without props', () => {
    let wrapper = null
    let instance = null
    beforeEach(() => {
        wrapper = shallow(<Loader />)
        instance = wrapper.instance()
    })

    it('should test loader for reports', () => {
        expect(wrapper.find('.loader_reports').exists()).toBeFalsy()
    })
})