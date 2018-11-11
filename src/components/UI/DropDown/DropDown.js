import React, {Component} from 'react'
import './DropDown.scss'
import TagItem from '../TagItem/TagItem'
import SearchBar from '../SearchBar/SearchBar'

class DropDown extends Component {
  render() {
    return (
      <div className="select-box">
  
        <div className="select-box--container" onClick={this.props.onDropDownHandler} style={{backgroundColor: this.props.selectedTag.color}}>
          <div className="select-box--selected-item">
            { this.props.selectedTag.category ? this.props.selectedTag.category : 'Adicionar' }
          </div>
        </div>
        
        <div className="select-box--items" style={{display: this.props.showItems ? 'block' : 'none'}}>
          <SearchBar />
  
          {this.props.items.map(item => (
            <TagItem  key={item.id} 
                      onClickHandler={this.props.onSelectedTagHandler.bind(this, item)} 
                      name={item.category}
                      color={item.color}/>
          ))}
  
          <div className="select-box--items__create-tag" onClick={this.props.createCategory} >Criar categoria</div>
        </div>
  
      </div>
    )

  }
}

export default DropDown