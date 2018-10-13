import React from 'react'
import './Modal.scss'

class Modal extends React.PureComponent {

	render() {
		let style = ["modal"]
		this.props.show ? style.push("show") : null
		return (
			<div className={style.join(' ')}>
				{this.props.children}
			</div>
		)
	}
}

export default Modal