import React,{Component} from 'react'
import "./DropArea.scss"
import ReactDropzone from 'react-dropzone'

class DropArea extends Component {

  state = {
    preview: null
  }

  render() {
    return (
      <div>
        <ReactDropzone className="drop-area" 
                      onDrop={this.onDropHandler}
                      accept="application/pdf"
                      multiple={false}
                      acceptClassName="accept">
          <h1 className="drop-area__title">Arraste o arquivo</h1>
          <p className="drop-area__p">ou</p>
          <p className="drop-area__p">clique dentro desta área</p>
        </ReactDropzone>
      </div>

    )
  }

  onDropHandler = (file, rejectedFiles) => {    

    if(file.length === 1){
      //alert("preview do arquivo: " + file[0].preview)
      console.log("Arquivo aceito:", file)

      const currentFile = file[0]
      const reader = new FileReader()
      reader.addEventListener("load", () =>   {
        this.setState({preview: reader.result})
        console.log(this.state.preview)
      }, false)
      reader.readAsDataURL(currentFile)

    } else if(rejectedFiles) {
      alert("Só aceitamos 1 arquivo PDF")
      console.log("arquivo rejeitado: ", rejectedFiles)
    }

  }

 

}

export default DropArea