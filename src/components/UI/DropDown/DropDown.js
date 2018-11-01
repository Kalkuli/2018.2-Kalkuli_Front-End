import React from 'react'
import './DropDown.scss'
const DropDown = (props) => {

  return (
    <div className="select-box">
      <div className="select-box--container" onClick={props.onDropDownHandler}>
        <div className="select-box--selected-item">
          { props.selectedTag.category }
        </div>
        {/* <div className="select-box--arrow" onClick={props.onDropDownHandler}>
          <span className={props.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}/>
        </div> */}
      </div>
        
      <div className="select-box--items" style={{display: props.showItems ? 'flex' : 'none'}}>
        {props.items.map(item => (
          <div key={item.id} onClick={() => props.onSelectedTagHandler(item)}>
            {item.category}
          </div>
        ))}
        <div>
          Criar categoria
        </div>
      </div>
    </div>
  )
}

export default DropDown