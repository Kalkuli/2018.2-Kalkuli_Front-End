import React from 'react'
import './BaseButton.scss'

const BaseButton = (props) => {
  
  let styles = ["base-button"]
  if(props.type === 'confirm')
    styles.push('confirm')
  else if(props.type === 'cancel')
    styles.push('cancel')
  else if(props.type === 'delete')
    styles.push('delete')
  else if(props.type === 'choose-file')
    styles.push('choose-file')
  if(props.size === 'small')
    styles.push('base-button--small')
  else if(props.size === 'medium')
    styles.push('base-button--medium')
    else if(props.type === 'edit')
    styles.push('edit')

  return (
    <a className={styles.join(' ')} onClick={props.click}>
      {props.children}
    </a>
  )
}

export default BaseButton