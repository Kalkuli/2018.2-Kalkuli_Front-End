import DropArea from '../../UI/DropArea/DropArea'
import ReactDropzone from 'react-dropzone'

describe('Testing <DropArea/>', () => {

  let wrapper = null
  beforeEach(() => {
    wrapper = shallow(<DropArea/>)
  })

  it('should find ReactDropzone', () => {
    expect(wrapper.find(ReactDropzone).exists()).toBe(true)
  })

  it('should change message when file is selected', () => {
    wrapper.setProps({fileSelected: true})
    expect(wrapper.html()).toMatch('Arquivo Selecionado com Sucesso')
  })
})