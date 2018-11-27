import '../../../services/__mocks__/matchMedia'
import { ReceiptAdder, mapStateToProps, mapDispatchToProps } from '../../Receipt/ReceiptAdder/ReceiptAdder'
import ReceiptCompare from '../../Receipt/ReceiptCompare/ReceiptCompare'
import Confirmation from '../../UI/Confirmation/Confirmation'
import Colors from '../../UI/Colors/Colors'
import Loader from '../../UI/Loader/Loader'
jest.mock('../../../services/getAllTags.js')
jest.mock('../../../services/createReceipt.js')
jest.mock('../../../services/sendFile.js')
jest.mock('../../../services/interpretData.js')
jest.mock('../../../services/getStatus.js')

describe('Testing <ReceiptAdder/>', () => {

  let wrapper = null
  let instance = null
  const spyOnTagsAdded = jest.fn()
  const dispatch = jest.fn()
  const spyOnFileExtractedAdded = jest.fn()
  const props = {
    onTagsAdded: spyOnTagsAdded,
    tags: [{id: 1, category: 'Food', color: '#424242'}, {id: 2, category: 'shirt', color: 'blue'}],
    onFileExtractedAdded: spyOnFileExtractedAdded
  }

  const tag = {
    id: 1,
    category: 'Food',
    color: '#424242'
  }

  beforeEach(() => {
    wrapper = shallow(<ReceiptAdder {...props}/>)
    instance = wrapper.instance()
  })

  it('should render ReceiptCompare', () => {
    wrapper.setState({ fileSent: true, completed: false, creatingCategory: false })
    expect(wrapper.find(ReceiptCompare).exists()).toBe(true)
  })

  it('should render Confirmation', () => {
    wrapper.setState({ completed: true, creatingCategory: false })
    expect(wrapper.find(Confirmation).exists()).toBe(true)
  })

  it('should render Colors', () => {
    wrapper.setState({ creatingCategory: true })
    expect(wrapper.find(Colors).exists()).toBe(true)
  })

  it('should add a new tag', () => {
    instance.onNewTagHandler(tag)
    expect(wrapper.state('newTag')).toEqual(tag)
  }),

  it('should show Colors by setting createCategory to true', () => {
    instance.createCategory()
    expect(wrapper.state('creatingCategory')).toBe(true)
  })

  it('should send request for creating a new category', (done) => {
    instance.onConfirmCategoryHandler(tag, jest.fn())
    setTimeout(() => {
      //expect(spyOnTagsAdded).toHaveBeenCalled()
      expect(wrapper.state('creatingCategory')).toBe(false)
      done()
    })
  })
  
  it('should close category creator when cancelling it', () => {
    wrapper.setState({creatingCategory: true})
    instance.onCancelHandler()
    expect(wrapper.state('creatingCategory')).toBe(false)
  })

  it('should close compare screen when cancelling it', () => {
    wrapper.setState({creatingCategory: false})
    instance.onCancelHandler()
    expect(wrapper.state('fileSent')).toBe(false)
    expect(wrapper.state('fileSelected')).toBe(false)
  })

  it('should test mapDispatchToProps for dispatching onFilePDFAdded', () => {
    mapDispatchToProps(dispatch).onFilePDFAdded()
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'ADD_PDF_FILE'})
  })

  it('should test mapDispatchToProps for dispatching onFileExtractedAdded', () => {
    mapDispatchToProps(dispatch).onFileExtractedAdded()
    expect(dispatch.mock.calls[1][0]).toEqual({type: 'ADD_EXTRACTED_DATA'})
  })

  it('should test mapDispatchToProps for dispatching onReceiptsAdded', () => {
    mapDispatchToProps(dispatch).onReceiptsAdded()
    expect(dispatch.mock.calls[2][0]).toEqual({type: 'ADD_RECEIPTS'})
  })

  it('should test mapDispatchToProps for dispatching onTagsAdded', () => {
    mapDispatchToProps(dispatch).onTagsAdded()
    expect(dispatch.mock.calls[3][0]).toEqual({type: 'ADD_TAGS'})
  }) 
  
  it('should test mapStateToProps for retrieving tags from store', () => {
    const initialState = {
      tags: tag
    }
    expect(mapStateToProps(initialState).tags).toEqual(tag)
  })

  it('should render manual ReceiptCompare', () => {
    wrapper.setState({ extraction: true })
    expect(wrapper.find(ReceiptCompare).exists()).toBe(true)
  })

  it('should render Loader request is being done', () => {
    wrapper.setState({ loading: true })
    instance.ChooseScreen()
    expect(wrapper.find(Loader).exists()).toBe(true)
  })

  it('should toggle extraction', () => {
    wrapper.setState({ extraction: false })
    instance.jumpExtraction()
    expect(wrapper.state('extraction')).toBe(true)
  })

  it('should create a receipt', async() => {
    const response = await instance.onConfirmButton({cnpj: '123123123', emission_date: '10/10/2018', title: 'oi'})
    expect(wrapper.state('completed')).toBe(true)
  })

  it('should send file to extraction', async() => {
    wrapper.setState({ file: ['testFile'] })
    const response = await instance.onConfirmHandler()
    expect(wrapper.state('loading')).toBe(true)
  })

  it('should check the status of interpretation', async() => {
    const response = await instance.checkStatus('https://kalkuli-extraction.herokuapp.com/testFile')
    
  })
})