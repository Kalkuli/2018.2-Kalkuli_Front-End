import React from 'react'
import './Modal.scss'

class Modal extends React.PureComponent {

/* 	shouldComponentUpdate(nextProps, nextState) {
	}
 */
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