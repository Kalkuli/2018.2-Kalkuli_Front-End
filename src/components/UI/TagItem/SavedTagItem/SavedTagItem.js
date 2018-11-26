import React from 'react'
import './SavedTagItem.scss'

const TagItem = ({name, color, size}) => {
  let styles = ['saved-tag-item']
  if(size === 'small')
    styles.push('saved-tag-item--small')
  return (
    <div className={styles.join(' ')} style={{backgroundColor: color}}>
      <p className="saved-tag-item__name" style={(size === "small") ? {fontSize: '1rem'} : null }>{name}</p>
    </div>
  )
}

export default TagItem