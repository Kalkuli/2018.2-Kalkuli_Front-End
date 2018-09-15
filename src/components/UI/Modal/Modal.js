import React from 'react'
import './Modal.scss'

const Modal = (props) => (
	<div className="modal">
		{props.children}
	</div>
)

export default Modal