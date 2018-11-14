import React, {Component} from 'react'
import './Colors.scss'
import BaseButton from '../Button/BaseButton/BaseButton';
import newTag from '../../../services/newTag'
import Confirmation from '../Confirmation/Confirmation';
import colors from '../../../helpers/colors.json'

class Colors extends Component {
    state = {
        value: '',
        selected: null,
        fail: '', 
        newTag: {}
    }
    render(){
        let content = this.state.fail ? <Confirmation onConfirmOk={this.errorOK} content={this.state.fail} valid={'error'}/> : null
        return(
            <div className='create-category'>
                <p className='create-category__phrase'>Nome:</p>
                {content}
                <input className='create-category__input' value={this.state.value} onChange={this.handleChange} />
                <p className='create-category__phrase'>Selecione uma cor:</p>
                <div className='create-category__colors'>
                    {colors.map( (color, index) => {
                        var colorClass = index === this.state.selected ? 'create-category__colors__color2' : 'create-category__colors__color'
                        return(
                            <div key={index} className={colorClass} onClick={this.clickColor.bind(this, index)} style={{backgroundColor: color.color}}></div>
                            )
                        }, )
                    }
                </div>
                <div className='create-category__buttons'>
                    <BaseButton type={'delete'} size={'small'} click={this.props.onCancelHandler} >Cancelar</BaseButton>
                    <BaseButton type={'confirm'} size={'small'} click={this.state.value && (this.state.selected || this.state.selected === 0) ? this.onConfirmHandler : this.showError} >Confirmar</BaseButton>
                </div>
            </div>
        )
    }

    showError = () => {
        if(!this.state.value){
            this.setState({fail: 'Não é possível adicionar uma categoria sem nome'})
        }
        else{
            this.setState({fail: 'Não é possível adicionar uma categoria sem cor'})
        }
    }

    errorOK = () => {
        this.setState({fail:''})
    }

    onConfirmHandler = async () => {
        const tag = {
            "category": this.state.value,
            "color": colors[this.state.selected].color
        }
        let response = await newTag(tag)
        if(response === 'success'){
            this.props.onConfirmHandler()
            this.props.onNewTagHandler(tag)
        }
        else
            this.setState({fail: response})
    }

    clickColor = (index) => {
        this.setState({selected: index})
    } 

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
}

export default Colors