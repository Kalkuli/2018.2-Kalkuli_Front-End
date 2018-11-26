import React from 'react'
import './ReportsButton.scss'

const ReportsButton = (props) => {

  let styles = ["reports-button"]
  if(props.type === 'confirm')
    styles.push('confirm')
  else 
    styles.push('no-background')

  return(
    <div onClick={props.onClickHandler} className={styles.join(' ')} >
      {props.date_from ? 
      <div className='reports-button__dates' >
          {props.date_from} até {props.date_to}
      </div> :
      <div className='reports-button__dates' >
          -
      </div> }
      <div className='reports-button__category' >
          <div className='reports-button__category__color' style={{backgroundColor: props.color}}></div>
          <p className='reports-button__category__name' >{props.name}</p>
      </div>
    </div>
  )
}

export default ReportsButton