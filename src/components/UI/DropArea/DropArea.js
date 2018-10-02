import React, { Fragment } from 'react'
import "./DropArea.scss"
import ReactDropzone from 'react-dropzone'

const DropArea = (props) => (
  <Fragment>
    <ReactDropzone className="drop-area"
      onDrop={props.onDropHandler}
      accept="application/pdf"
      multiple={false}
      acceptClassName="accept">
      <h1 className="drop-area__title">Arraste o arquivo</h1>
      <p className="drop-area__p">ou</p>
      <p className="drop-area__p">clique dentro desta área</p>
    </ReactDropzone>
  </Fragment>
)

export default DropArea