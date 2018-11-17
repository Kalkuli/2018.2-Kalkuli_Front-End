import Items from '../../UI/Items/Items'

describe('Testing <Items />', () => {

    let wrapper = null
    beforeEach(() => {
        wrapper = shallow(<Items />)
    })

    it('should show links in navbar', () => {
        expect(wrapper.find('.links').exists()).toBeTruthy()
    }) 
})