import React from 'react'
import './TagItem.scss'

const TagItem = ({onClickHandler, name, color, }) => (
  <div onClick={onClickHandler} className="tag-item">
    <div className="tag-item__container">
      <div className="tag-item__container__color-box" style={{backgroundColor: color}}></div>
      <p className="tag-item__container__name">{name}</p>
    </div>
  </div>
)

export default TagItem