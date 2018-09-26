import React, {Component} from 'react'
import './Dashboard.scss'
import Navbar from '../UI/Navbar/Navbar'
import Report from '../UI/Report/Report';
import BaseButton from '../UI/Button/BaseButton/BaseButton'

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <Navbar/>
                <div className="dashboard__report-area">
                    <Report/>
                    <BaseButton size="small" type="confirm" click={this.onConfirmHandler}>Salvar Relatório</BaseButton>
                </div>
            </div>
        )
    }
    onConfirmHandler = () => {
		this.props.history.push('/confirmation')
	}
}

export default Dashboard