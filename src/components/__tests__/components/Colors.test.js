import Colors from '../../UI/Colors/Colors'
jest.mock('../../../services/newTag')

describe('Testing <Colors/>', () => {
    let wrapper = null
    let instance = null
    let spyOnNewTagHandler = jest.fn()
    let spyonConfirmHandler = jest.fn()
    const props = {
        onNewTagHandler: spyOnNewTagHandler,
        onConfirmHandler: spyonConfirmHandler
    }
    beforeEach(() => {
        wrapper = shallow(<Colors {...props}/>)
        instance = wrapper.instance()
    })

    it("should set state fail to ''", () => {
        wrapper.setState({fail:'deu ruim'})
        expect(wrapper.state('fail')).toMatch('deu ruim')
        instance.errorOK()
        expect(wrapper.state('fail')).toMatch('')
    })

    it('should set selected state', () => {
        wrapper.setState({selected: null})
        instance.clickColor(2)
        expect(wrapper.state('selected')).toEqual(2)
    })

    it('should test if this.state.value is written', () => {
        wrapper.setState({
            selected: 2
        })
        instance.showError()
        expect(wrapper.state('fail')).toMatch('Não é possível adicionar uma categoria sem nome')
    })

    it('should test if this.state.selected is clicked', () => {
        wrapper.setState({
            value: 'Banana'
        })
        instance.showError()
        expect(wrapper.state('fail')).toMatch('Não é possível adicionar uma categoria sem cor')
    })

    it('should test if this.state.value is being written', () => {
        const event = {
            target: {
                value: 'Banana'
            }
        }
        wrapper.setState({value: ''})
        expect(wrapper.state('value')).toMatch('')
        instance.handleChange(event)
        expect(wrapper.state('value')).toMatch('Banana')
    })

    it('should test if onConfirmHandler is working', () => {
        wrapper.setState({
            fail: '',
            value: 'Pipoca',
            selected: 2
        })
        instance.onConfirmHandler().then(() => {
            expect(spyOnNewTagHandler).toHaveBeenCalled()
        })
    })

    it('should test if onConfirmHandler is not working', () => {
        wrapper.setState({
            fail: '',
            selected: 2
        })
        instance.onConfirmHandler().then(() => {
            expect(wrapper.state('fail')).toMatch('error')
        })
    })
    
})