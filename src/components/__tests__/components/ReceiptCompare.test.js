import '../../../services/__mocks__/matchMedia'
import { ReceiptCompare, mapStateToProps } from '../../Receipt/ReceiptCompare/ReceiptCompare'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import Input from '../../UI/Input/Input'
import receiptInputs from '../../../helpers/receiptInputs'
jest.mock('../../../services/getAllTags')

describe('Testing <ReceiptCompare/>', () => {
  let wrapper = null

  const spyOnConfirmButton = jest.fn()
  const props = {
    onConfirmButton: spyOnConfirmButton,
    tags: [{}],
    fileExtracted: { }
  }
  
  beforeEach(() => {
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

  it('should set error when the request for fetching tag retrieve error', () => {
    wrapper.setProps({tags: null})
  })

  it('should open drop down', () => {
    wrapper.setState({ showItems: false })
    expect(wrapper.state('showItems')).toBe(false)
    wrapper.instance().onDropDownHandler()
    expect(wrapper.state('showItems')).toBe(true)
  })

  it('should show the selected tag', () => {
    wrapper.setState({ selectedTag: {} })
    expect(wrapper.state('selectedTag')).toEqual({})
    const tag = { id: 1, color: 'red', category: 'food' }
    wrapper.instance().onSelectedTagHandler(tag)
    expect(wrapper.state('selectedTag')).toBe(tag)
    expect(wrapper.state('showItems')).toBe(false)
  })

  it('should initialize the inputs witt the extracted', () => {
    wrapper.setProps({ 
      fileExtracted : {
        cnpj: '123123123',
        date: '10/10/2018'
     }
    })
    wrapper.setState({ 
      receiptInput: {
        cnpj: { value: '123123123' },
        date: { value: '10/10/2018' }
      } 
    })
    wrapper.instance().initInputs()
    expect(wrapper.state('receiptInput')).toEqual({
      cnpj: { value: '123123123', valid: true },
      date: { value: '10/10/2018', valid: true }
    })
  })

})