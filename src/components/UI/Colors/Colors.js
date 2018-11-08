import React, {Component} from 'react'
import './Colors.scss'
import BaseButton from '../Button/BaseButton/BaseButton';
import axios from 'axios';
import Confirmation from '../Confirmation/Confirmation';

const colors = [{
    color: '#FF4F78'
},
{
    color: '#8037FF'
},
{
    color: '#00DF6B'
},
{
    color: '#E045C1'
},
{
    color: '#00CFDA'
},
{
    color: '#FFA312'
},
{
    color: '#005D27'
},
{
    color: '#451259'
},
{
    color: '#d8bd22'
},
{
    color: '#3951b2'
}]

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
                            <div key={index} className={colorClass} onClick={() => this.clickColor(index)} style={{backgroundColor: color.color}}></div>
                            )
                        }, )
                    }
                </div>
                <div className='create-category__buttons'>
                    <BaseButton type={'delete'} size={'small'} click={this.props.onCancelHandler} >Cancelar</BaseButton>
                    <BaseButton type={'confirm'} size={'small'} click={this.onConfirmHandler} >Confirmar</BaseButton>
                </div>
            </div>
        )
    }

    errorOK = () => {
        this.setState({fail:''})
    }

    onConfirmHandler = () => {
        const tag = {
            "category": this.state.value,
            "color": colors[this.state.selected].color
        }
        this.props.onNewTagHandler(tag)
        axios.post('http://172.21.0.1:5008/api/v1/create_tag', {
            "tag": tag 
        })
        .then(() => {
            this.props.onConfirmHandler()
        })
        .catch((error) => {
            this.setState({fail: error.response.data.message})
        })
    }

    clickColor = (index) => {
        this.setState({selected: index})
    } 

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
}

export default Colors