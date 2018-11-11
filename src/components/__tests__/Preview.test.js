import Preview from '../Preview/Preview'

describe('Testing <Preview />', () => {

    let wrapper = null
    beforeEach( () => {
        wrapper = shallow(<Preview />)
    })

    it('it should have find preview className just once', () => {
        expect(wrapper.find('.preview')).toHaveLength(1)
    })
})