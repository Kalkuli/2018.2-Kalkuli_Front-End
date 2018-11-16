import { ReceiptAdder } from '../Receipt/ReceiptAdder/ReceiptAdder'
import ReceiptCompare from '../Receipt/ReceiptCompare/ReceiptCompare'
import Confirmation from '../UI/Confirmation/Confirmation'
import Colors from '../UI/Colors/Colors'
import BaseButton from '../UI/Button/BaseButton/BaseButton'
import Loader from '../UI/Loader/Loader'
jest.mock('../../services/getAllTags.js')

describe('Testing <ReceiptAdder/>', () => {

  let wrapper = null
  let instance = null
  const spyOnTagsAdded = jest.fn()
  const props = {
    onTagsAdded: spyOnTagsAdded
  }
  beforeEach(() => {
    wrapper = shallow(<ReceiptAdder {...props}/>)
    instance = wrapper.instance()
  })

  it('should take a snapshot and check if there is any change', () => {
    const tree = renderer.create(<ReceiptAdder/>).toJSON()
    expect(tree).toMatchSnapshot()
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
  
  /* it('should', () => {
    const file = [{
      name:"nota10.pdf",
      preview: "blob:http://localhost:3000/29d8904c-256f-4c91-8c60-2bd8f2587346",
      type: "application/pdf"
    }]
    instance.onDropHandler(file, [])

  })  */

})