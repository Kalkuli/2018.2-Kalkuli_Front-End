import '../../../services/__mocks__/matchMedia'
import 'moment/locale/pt-br'
import filterReceipts from '../../../helpers/filterReceipts'
import 'moment/locale/pt-br'
import {Reports, mapDispatchToProps, mapStateToProps} from '../../Reports/Reports'
jest.mock('../../../services/getAllTags.js')
jest.mock('../../../services/getAllReceipts.js')
jest.mock('../../../services/getAllReports.js')
jest.mock('../../../services/deleteReport.js')

describe('Testing <Reports />', () => {
    let wrapper = null
    let instance = null
    const spyOnTagsAdded = jest.fn()
    const spyOnReceiptsAdded = jest.fn()
    const spyOnGetReports = jest.fn()

    const props = {
        onTagsAdded: spyOnTagsAdded,
        onReceiptsAdded: spyOnReceiptsAdded,
        getReports: spyOnGetReports,
        receipts: [{
            emission_date: '2018-10-10',
            total_price: 10.00,
            tag_id: 1,
            id: 10
        },
        {
            emission_date: '2018-10-09',
            total_price: 10.00,
            tag_id: 1,
            id: 11
        },
        {
            emission_date: '2018-10-09',
            total_price: 10.00,
            tag_id: 2,
            id: 12
        },
        {
            emission_date: '2018-10-11',
            total_price: 10.00,
            tag_id: 2,
            id: 13
        }],
        tags: [{
            id: 1
        },
        {
            id: 2
        },{
            id: 3
        }]

    }

    beforeEach(() => {
        wrapper = shallow(<Reports {...props} />)
        instance = wrapper.instance()
    })

    it('should display reports', () => {
        expect(wrapper.find('.reports').exists()).toBeTruthy()
    })

    it('should test mapDispatchToProps for dispatching onReceiptsAdded', () => {
        const dispatch = jest.fn()
        mapDispatchToProps(dispatch).onReceiptsAdded()
        expect(dispatch.mock.calls[0][0]).toEqual({type: 'ADD_RECEIPTS'})
    })

    it('should test mapDispatchToProps for dispatching onTagsAdded', () => {
        const dispatch = jest.fn()
        mapDispatchToProps(dispatch).onTagsAdded()
        expect(dispatch.mock.calls[0][0]).toEqual({type: 'ADD_TAGS'})
    })

    it('should test mapStateToProps for retrieving receipts adn tags', () => {
        const initialState = {
          receipts: [{
              title: 'oi'
          }],
          tags: [{colors: 'red'}]
        }
        expect(mapStateToProps(initialState).receipts).toEqual([{title: 'oi'}])
        expect(mapStateToProps(initialState).tags).toEqual([{colors: 'red'}])
    })

    it('should test if state.position is equal to a index', () => {
        wrapper.setState({position: 0})
        expect(wrapper.find('.reports').exists()).toBeTruthy()
    })

    it('should sumReceipts function', () => {
        expect(instance.sumReceipts(props.receipts)).toEqual("40.00")
    })

    it('should test getReportInfo function finding tag ids', () => {
        wrapper.setState({
            reportCase: 'do not exist'
        })
        instance.getReportInfo('2018-09-01', '2018-11-10', props.tags[0])
        expect(wrapper.state('reportCase')).toEqual('reports')
    })

    it('should test getReportInfo function not finding tag ids', () => {
        wrapper.setState({
            reportCase: 'reports'
        })
        instance.getReportInfo('2018-09-01', '2018-11-10', props.tags[2])
        expect(wrapper.state('reportCase')).toEqual('do not exist')
    })

    it('should test onReportSelect function', () => {
        wrapper.setState({
            position: 0,
            idReport: 10
        })
        instance.onReportSelect(2, '2018-09-01', '2018-11-10', 11)
        expect(wrapper.state('position')).toEqual(2)
    })

    it('should test onCalcelHandler function', () => {
        wrapper.setState({
            confirmation: true
        })
        instance.onCancelHandler()
        expect(wrapper.state('confirmation')).toBeFalsy()
    })
    it('should test onConfirmationTrue function', () => {
        wrapper.setState({
            confirmation: false
        })
        instance.onConfirmationTrue()
        expect(wrapper.state('confirmation')).toBeTruthy()
    })

    it('should test onDeleteHandler function', () => {
        wrapper.setState({
            idReport: 10
        })
        instance.onDeleteHandler()
        expect(wrapper.state('confirmation')).toBeFalsy()
    })
})