import React from 'react'
import './BaseButton.scss'

const BaseButton = (props) => {
  
  let styles = ["base-button"]
  if(props.type === 'confirm')
    styles.push('confirm')
  else if(props.type === 'cancel')
    styles.push('cancel')
  else if(props.type === 'choose-file')
    styles.push('choose-file')

  return (
    <a className={styles.join(' ')} onClick={props.click}>
      {props.children}
    </a>
  )
}

export default BaseButton