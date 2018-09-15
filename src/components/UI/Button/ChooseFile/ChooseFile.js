import React, {Fragment, Component} from 'react'
import BaseButton from '../BaseButton/BaseButton'

class ChooseFile extends Component {

  render() {

    return (
      <Fragment>
        <input type="file" id="real-file-btn" hidden="hidden" onChange={this.onChangeFileHandler}/>
        <BaseButton type="choose-file" click={this.onClickHandler}>Selecione arquivo</BaseButton>
      </Fragment>
    )
  }  

  onClickHandler = () => {
    const realFileBtn = document.getElementById("real-file-btn").click()
    console.log(realFileBtn)
  }

  onChangeFileHandler = () => {
    const realFileBtn = document.getElementById("real-file-btn")
    if(realFileBtn.value)
      console.log(realFileBtn.value)
  }

}

export default ChooseFile