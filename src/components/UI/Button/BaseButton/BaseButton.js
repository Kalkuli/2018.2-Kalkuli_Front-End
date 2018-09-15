import React from 'react'
import './BaseButton.scss'

const BaseButton = (props) => {
  
  let styles = ["base-button"]
  if(props.type === 'confirm')
    styles.push('confirm')
  else if(props.type === 'cancel')
    styles.push('cancel')

  return (
    <a className={styles.join(' ')}>
      {props.children}
    </a>
  )
}

export default BaseButton