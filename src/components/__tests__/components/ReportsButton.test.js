import ReportsButton from '../../UI/Button/ReportsButton/ReportsButton'

describe('Testing <ReportsButton />', () => {

    let wrapper = null

    it('should have found reports-button classname just once', () => {
        wrapper = shallow(<ReportsButton/>)
        expect(wrapper.find('.reports-button')).toHaveLength(1)
    })

    it('should return the action to confirm', () => {
        wrapper = shallow(<ReportsButton type='confirm' />)
        expect(wrapper.find('.confirm').exists()).toBe(true)
    })

    it('should return the action to no background', () => {
        wrapper = shallow(<ReportsButton type='no-background' />)
        expect(wrapper.find('.no-background').exists()).toBe(true)
    })
})