import { ReceiptAdder, mapStateToProps, mapDispatchToProps } from '../../Receipt/ReceiptAdder/ReceiptAdder'
import ReceiptCompare from '../../Receipt/ReceiptCompare/ReceiptCompare'
import Confirmation from '../../UI/Confirmation/Confirmation'
import Colors from '../../UI/Colors/Colors'
import BaseButton from '../../UI/Button/BaseButton/BaseButton'
import Loader from '../../UI/Loader/Loader'
jest.mock('../../../services/getAllTags.js')

describe('Testing <ReceiptAdder/>', () => {

  let wrapper = null
  let instance = null
  const spyOnTagsAdded = jest.fn()
  const dispatch = jest.fn()

  const props = {
    onTagsAdded: spyOnTagsAdded
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
    const tag = {
      id: 1,
      category: 'Food',
      color: '#424242'
    }
    instance.onNewTagHandler(tag)
    expect(wrapper.state('newTag')).toEqual(tag)
  }),

  it('should enable button to confirm sending the file', () => {
    wrapper.setState({ loading: false, fileSelected: true})
    instance.ChooseScreen()
    expect(wrapper.find(BaseButton).exists()).toBeTruthy()
  })

  it('should render Loader when file is being sent', () => {
    wrapper.setState({ loading: true })
    instance.ChooseScreen()
    expect(wrapper.find(Loader).exists()).toBeTruthy()
  })

  it('should show Colors by setting createCategory to true', () => {
    instance.createCategory()
    expect(wrapper.state('creatingCategory')).toBe(true)
  })

  it('should send request for creating a new category', (done) => {
    instance.onConfirmCategoryHandler()
    setTimeout(() => {
      expect(spyOnTagsAdded).toHaveBeenCalled()
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
    const tags = {id: 1, category: "Food", color: "red"}
    const initialState = {
      tags: tags
    }
    expect(mapStateToProps(initialState).tags).toEqual(tags)
  })

  /* it('should', () => {
    const file = [{
      name:"nota10.pdf",
      preview: "blob:http://localhost:3000/29d8904c-256f-4c91-8c60-2bd8f2587346",
      type: "application/pdf"
    }]
    instance.onDropHandler(file, [])

  })  */

})