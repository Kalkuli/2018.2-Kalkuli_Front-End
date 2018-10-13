import React from 'react'
import './Modal.scss'

const Modal = (props) => {

	let style = ["modal"]
	props.show ? style.push("show") : null
	return (
		<div className={style.join(' ')}>
			{props.children}
		</div>
	)
}

export default Modal