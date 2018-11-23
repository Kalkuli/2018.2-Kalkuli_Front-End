import React, {Component} from 'react'
import './DropDown.scss'
import TagItem from '../TagItem/TagItem'

class DropDown extends Component {
  render() {
    let selectPhrase = this.props.empty ? 'Buscar Categoria' : 'Adicionar'
    return (
      <div className="select-box">
  
        <div className="select-box--container" onClick={this.props.onDropDownHandler} style={{backgroundColor: this.props.selectedTag.color}}>
          <div className="select-box--selected-item">
            { this.props.selectedTag.category ? this.props.selectedTag.category : selectPhrase }
          </div>
        </div>
        
        <div className="select-box--items" style={{display: this.props.showItems ? 'block' : 'none'}} >

          {this.props.empty ? <div className="select-box--items__create-tag" onClick={this.props.onSelectedTagHandler.bind(this, {})} >Nenhuma</div> : null}
          {this.props.items.map(item => (
            <TagItem  key={item.id} 
                      onClickHandler={this.props.onSelectedTagHandler.bind(this, item)} 
                      name={item.category}
                      color={item.color}/>
          ))}
  
          {this.props.createCategory ? <div className="select-box--items__create-tag" onClick={this.props.createCategory} >Criar categoria</div> : null}
        </div>
  
      </div>
    )

  }
}

export default DropDown