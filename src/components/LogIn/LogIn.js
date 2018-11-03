import React from 'react'
import Modal from '../UI/Modal/Modal'
const LogIn = (props) => {

  return(
    <Modal show={props.show} click={props.onCloseLogIn}>
      <h1>Log in</h1>
    </Modal>
  )
}

export default LogIn