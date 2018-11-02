import React from 'react'
import './DropDown.scss'
import TagItem from '../TagItem/TagItem'

const DropDown = (props) => {

  return (
    <div className="select-box">
      <div className="select-box--container" onClick={props.onDropDownHandler}>
        <div className="select-box--selected-item" style={{backgroundColor: props.selectedTag.color}}>
          { props.selectedTag.category ? props.selectedTag.category : 'Adicionar' }
        </div>
        {/* <div className="select-box--arrow" onClick={props.onDropDownHandler}>
          <span className={props.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}/>
        </div> */}
      </div>
        
      <div className="select-box--items" style={{display: props.showItems ? 'block' : 'none'}}>
        {props.items.map(item => (
          <TagItem  key={item.id} 
                    onClickHandler={() => props.onSelectedTagHandler(item)} 
                    name={item.category}
                    color={item.color}/>
        ))}
        <div>
          Criar categoria
        </div>
      </div>
    </div>
  )
}

export default DropDown