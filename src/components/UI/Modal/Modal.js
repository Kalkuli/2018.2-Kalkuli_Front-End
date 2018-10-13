import React from 'react'
import './Modal.scss'

const Modal = (props) => {

	let style = ["modal"]
	props.show ? style.push("show") : null
	console.log(props.show)
	return (
		<div className={style.join(' ')}>
			{props.children}
		</div>
	)
}

export default Modal