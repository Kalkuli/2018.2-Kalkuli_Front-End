import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Colors from '../UI/Colors/Colors'
jest.mock('../../services/newTag')
configure({adapter: new Adapter()})

const colors = [{
    color: '#FF4F78'
},
{
    color: '#8037FF'
},
{
    color: '#00DF6B'
},
{
    color: '#E045C1'
},
{
    color: '#00CFDA'
},
{
    color: '#FFA312'
},
{
    color: '#005D27'
},
{
    color: '#451259'
},
{
    color: '#d8bd22'
},
{
    color: '#3951b2'
}]
 

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

    it('should call this.props.onNewTagHandler passing valid value', () => {
        wrapper.setState({
            value: 'Pipoca',
            selected: 2
        })
        instance.onConfirmHandler()
        expect(spyOnNewTagHandler).toHaveBeenCalled()
    })

    it('should call this.props.onNewTagHandler passing invalid value', () => {
        wrapper.setState({
            value: '',
            selected: 2
        })
        instance.onConfirmHandler()
        expect(spyOnNewTagHandler).toHaveBeenCalled()
    })

    it('should set selected state', () => {
        wrapper.setState({selected: null})
        instance.clickColor(2)
        expect(wrapper.state('selected')).toEqual(2)
    })

    it('should', () => {
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
    
})