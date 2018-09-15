import React, {Fragment} from 'react'
import BaseButton from '../BaseButton/BaseButton'

const ChooseFile = () => {

  return (
    <Fragment>
      <input type="file" id="real-file" hidden="hidden"/>
      <BaseButton>Selecione arquivo</BaseButton>
    </Fragment>
    
  )
}

export default ChooseFile