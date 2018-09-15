import React,{Component} from 'react'
import "./DropArea.scss"
import ChooseFile from '../Button/ChooseFile/ChooseFile'

class DropArea extends Component {

  render() {
    return (
      <div className="drop-area">
        <h1 className="drop-area__title">Arraste o arquivo</h1>
        <p className="drop-area__p">ou</p>
        <ChooseFile />
      </div>
    )
  }
}

export default DropArea