import React from 'react'
import './BaseButton.scss'

const BaseButton = (props) => {
  
  let styles = ["base-button"]
  if(props.type === 'confirm')
    styles.push('confirm')
  else if(props.type === 'delete')
    styles.push('delete')
  else if(props.type === 'no-background')
    styles.push('no-background')
  else if(props.type === 'disable')
    styles.push('disable')
    
  if(props.size === 'small')
    styles.push('base-button--small')
  else if(props.size === 'medium')
    styles.push('base-button--medium')

  return (
    <a className={styles.join(' ')} onClick={props.type !== 'disable' ? props.click : null}>
      {props.children}
    </a>
  )
}

export default BaseButton