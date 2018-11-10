import { ReceiptCompare, mapStateToProps } from '../Receipt/ReceiptCompare/ReceiptCompare'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import receiptInputs from '../../helpers/receiptInputs'
jest.mock('../../services/getAllTags')

describe('Testing <ReceiptCompare/>', () => {
  let wrapper = null

  const spyOnConfirmButton = jest.fn()
  const props = {
    onConfirmButton: spyOnConfirmButton,
    tags: [{}],
  }
  
  beforeEach(() => {
    Array.prototype.findIndex = jest.fn()
    Object.prototype.hasOwnProperty = jest.fn(key => false)
    wrapper = shallow(<ReceiptCompare {...props} />)
    wrapper.setState({selectedTag: {
      'category': 'food',
      'color': 'red',
    }})
  })
  
  it('should find BaseButton', () => {
    expect(wrapper.find(BaseButton).exists()).toBe(true)
  })

  it('should test mapStateToProps', () => {
    const initialState = {
      filePDF: null,
		  fileExtracted: null
    }
    expect(mapStateToProps(initialState).filePDF).toEqual(null)
    expect(mapStateToProps(initialState).fileExtracted).toEqual(null)
  })

  it('should test getAllTags', (done) => {
    done()
  })

  it('should call onConfirmHandler and trigger spyOnConfirmButton', () => {
    wrapper.setState({selectedTag:{
      id: 1,
      category: 'Pipoca',
      color: '#000000'
    }})
    wrapper.instance().onConfirmHandler()
    expect(spyOnConfirmButton).toHaveBeenCalled()
  })

  it('should call onClickHandler', () => {
    wrapper.instance().onClickHandler()
  })

  it('should test a valid input value', () => {
    wrapper.setState({receiptInput: receiptInputs})
    expect(wrapper.instance().checkValidity('Valor Válido', receiptInputs.title.validation)).toBe(true)
  })

  it('should test an invalid input value', () => {
    expect(wrapper.instance().checkValidity('o', receiptInputs.title.validation)).toBe(false)
  })

  it('should call onChangeHandler', () => {
    wrapper.instance().checkValidity = jest.fn(() => {return true})
    wrapper.instance().onChangeHandler({target: {value: 'teste'}}, receiptInputs.title)
    expect(wrapper.state('receiptIsValid')).toBe(false)
  })

  it('should receive a null file', () => {
    wrapper.setProps({filePDF: null})
  })
})