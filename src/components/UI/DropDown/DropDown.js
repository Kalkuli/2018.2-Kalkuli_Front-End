import React from 'react'

const DropDown = (props) => {

  return (
    <div className="select-box">
      <div className="select-box--container">
        <div className="select-box--selected-item">
          { props.selectedTag.value }
        </div>
        <div className="select-box--arrow" onClick={props.onDropDownHandler}>
          <span className={props.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}/>
        </div>
      </div>
        
      <div className="select-box--items" style={{display: !props.showItems ? 'block' : 'none'}}>
        {props.items.map(item => (
          <div key={item.id} onClick={() => props.onSelectedTagHandler(item)}>
            {item.value}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropDown