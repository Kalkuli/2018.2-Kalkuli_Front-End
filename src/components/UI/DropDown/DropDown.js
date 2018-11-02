import React from 'react'
import './DropDown.scss'
import TagItem from '../TagItem/TagItem'
import SearchBar from '../SearchBar/SearchBar'
const DropDown = (props) => {
  return (
    <div className="select-box">
      <div className="select-box--container" onClick={props.onDropDownHandler} style={{backgroundColor: props.selectedTag.color}}>
        <div className="select-box--selected-item">
          { props.selectedTag.category ? props.selectedTag.category : 'Adicionar' }
        </div>
      </div>
      <div className="select-box--items" style={{display: props.showItems ? 'block' : 'none'}}>
        <SearchBar />
        {props.items.map(item => (
          <TagItem  key={item.id} 
                    onClickHandler={() => props.onSelectedTagHandler(item)} 
                    name={item.category}
                    color={item.color}/>
        ))}
        <div className="select-box--items__create-tag">
          Criar categoria
        </div>
      </div>
    </div>
  )
}

export default DropDown