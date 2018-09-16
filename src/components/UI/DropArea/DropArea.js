import React,{Component} from 'react'
import "./DropArea.scss"
import ReactDropzone from 'react-dropzone'

class DropArea extends Component {

  render() {
    return (
      <ReactDropzone className="drop-area" 
                     onDrop={this.onDropHandler}
                     multiple={false}
                     accept="application/pdf">
        <h1 className="drop-area__title">Arraste o arquivo</h1>
        <p className="drop-area__p">ou</p>
        <p className="drop-area__p">clique dentro desta área</p>
      </ReactDropzone>
    )
  }

  onDropHandler = (file, rejectedFiles) => {
    console.log(file)
  }

}

export default DropArea