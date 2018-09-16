import React,{Component} from 'react'
import "./DropArea.scss"
import ReactDropzone from 'react-dropzone'

class DropArea extends Component {

  render() {
    return (
      <ReactDropzone className="drop-area" 
                     onDrop={this.onDropHandler}
                     multiple={false}
                     accept="application/pdf"
                     acceptClassName="accept">
        <h1 className="drop-area__title">Arraste o arquivo</h1>
        <p className="drop-area__p">ou</p>
        <p className="drop-area__p">clique dentro desta área</p>
      </ReactDropzone>
    )
  }

  onDropHandler = (file, rejectedFiles) => {    
    if(file.length === 1){
      alert("preview do arquivo: " + file[0].preview)
      console.log("Arquivo aceito:", file)
    } else if(rejectedFiles) {
      alert("Só aceitamos 1 arquivo PDF")
      console.log("arquivo rejeitado: ", rejectedFiles)
    }
  }

}

export default DropArea