import React from 'react'
import './SavedTagItem.scss'

const TagItem = ({name, color}) => (
  <div className="saved-tag-item" style={{backgroundColor: color}}>
    <p className="saved-tag-item__name">{name}</p>
  </div>
)

export default TagItem