import '../../../services/__mocks__/matchMedia'
import 'moment/locale/pt-br'
import moment from 'moment'
import 'moment/locale/pt-br'
import {Dashboard, mapDispatchToProps, mapStateToProps} from '../../Dashboard/Dashboard'

describe('Testing <Dashboard />', () => {
    let wrapper = null 
    let instance = null
    const spyOnTagsAdded = jest.fn()
    const spyOnReceiptsAdded = jest.fn()
    const spyOrganizeData = jest.fn()
    const props = {
        onTagsAdded: spyOnTagsAdded,
        onReceiptsAdded: spyOnReceiptsAdded,
        onOrganizeData: spyOrganizeData,
        receipts: [{
            emission_date: '2018-10-10',
            total_price: 10.00
        },
        {
            emission_date: '2018-10-09',
            total_price: 10.00
        },
        {
            emission_date: '2018-10-09',
            total_price: 10.00
        },
        {
            emission_date: '2018-10-11',
            total_price: 10.00
        }]
    }
    const orderedReceipts = [{
            emission_date: '2018-10-09',
            total_price: 10.00
        },
        {
            emission_date: '2018-10-09'   ,
            total_price: 10.00
        },
        {
            emission_date: '2018-10-10',
            total_price: 10.00
        },
        {
            emission_date: '2018-10-11',
            total_price: 10.00
        }]

    const filteredReceipts = [{
        emission_date: '2018-10-09',
        total_price: 10.00
    },
    {
        emission_date: '2018-10-09'   ,
        total_price: 10.00
    },
    {
        emission_date: '2018-10-10',
        total_price: 10.00
    }]

    const prices = [20.00, 10.00, 10.00]
    const series = [{
        data: prices
    }]
    const dates = ['2018-10-09', '2018-10-10', '2018-10-11']

    const historyMock = { push: jest.fn() }
    beforeEach(() => {
        wrapper = shallow(<Dashboard {...props} history={historyMock}/>)
        instance = wrapper.instance()
    })

    it('should display dashboard ', () => {
        expect(wrapper.find('.dashboard').exists()).toBeTruthy()
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

      it('should order receipts by date', () => {
        instance.organizeData()
        expect(wrapper.state('receipts')).toMatchObject(orderedReceipts)
      })

      it('should sum receipts of same date', () => {
        instance.sumSameDate(orderedReceipts)
        expect(wrapper.state('series')).toMatchObject(series)
      })

      it('should test onConfirmHandler', () => {
        instance.onConfirmHandler()
        expect(historyMock.push.mock.calls[0]).toEqual(['/confirmation']);
      })

      it('should test chooseButton', () => {
        const loading = true
        const isValid = true
        const chooseButtonLoader = shallow(instance.chooseButton(loading, isValid, props.receipts))
        expect(chooseButtonLoader).toHaveLength(1)
      })

      it('should test sumReceipts', () => {
          instance.sumReceipts(orderedReceipts)
          expect(wrapper.state('sum')).toEqual('40.00')
      })

      it('should test onChange', () => {
          wrapper.setState({receipts: orderedReceipts})
          let startDate = new Date('Mon Oct 08 2018 12:00:00 GMT-0300 (Brasilia Standard Time)')
          startDate = moment(startDate)

          let endDate = new Date('Wed Oct 10 2018 12:00:00 GMT-0300 (Brasilia Standard Time)')
          endDate = moment(endDate)

          instance.onChange({startDate,endDate})

          expect(wrapper.state('filteredReceipts')).toEqual(filteredReceipts)
      })

})