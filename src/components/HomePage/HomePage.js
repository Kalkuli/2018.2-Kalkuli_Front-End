import React,{Fragment, Component} from 'react'
import './header.scss'
import './about.scss'
import './call.scss'
import './features.scss'
import './footer.scss'
import imgPiggy from '../../assets/img/piggy-bank.svg'
import imgReceipt from '../../assets/img/receipt.svg'
import imgAnalysis from '../../assets/img/analysis.svg'
import imgResult from '../../assets/img/result.svg'
import HomeNavBar from '../UI/Navbar/HomeNavBar/HomeNavBar'
import SignUp from '../UI/Button/SignUp/SignUp'
import Backdrop from '../../components/UI/BackDrop/BackDrop'
import Register from '../Register/Form'
import {baseURL} from '../../services/axiosConfig'
import Header from './Header'

const env1 = "Em process.env.REACT_APP_ENV: " + process.env.REACT_APP_ENV;
console.log('\n\n\n', env1, '\n\n\n', baseURL, '\n\n\n');

class HomePage extends Component{
  state = {
    newCompany: false
  }
  render(){
    return (
      <Fragment>
        <HomeNavBar onConfirmOk={this.onConfirmOk} click={this.registerClick}/>
        {this.state.newCompany ? this.showRegister() : null}
        <Header/>
        <section id="about" className="about">
          <div className='about__img'></div>
          <div className='about__text'>
            <h1>Quem somos</h1>
            <p>O Kalkuli é uma aplicação que tem o intuito de facilitar o gerenciamento de notas fiscais. 
              Nossa meta é ajudar micro e pequenas empresas a fazer o controle de tributos fiscais de maneira rápida e prática.</p>
          </div>
        </section>
        <section className='call'>
          <p className='call__p'>Rápido entendimento fiscal</p>
          <div className='call__bar'></div>
          <p className='call__p'>Melhores relatórios geram melhores gestões</p>
          <SignUp size="large" click={this.registerClick}/>
        </section>
        <section id="features" className="feature">
          <h1 className="feature__h1">Como o Kalkuli pode te ajudar?</h1>
          <div className="feature__container">
            <div className="feature__container__element">
              <div className="feature__container__element__border">
                <img className="feature__container__element__img" src={imgPiggy} alt="controle financeiro"/>
              </div>
              <p className="feature__container__element__p">
                Melhora o controle financeiro
              </p>
            </div>
            <div className="feature__container__element">
              <div className="feature__container__element__border">
                <img className="feature__container__element__img" src={imgReceipt} alt="evita perda de comprovantes"/>
              </div>
              <p className="feature__container__element__p">
                Evita a perda de comprovantes
              </p>
            </div>
            <div className="feature__container__element">
              <div className="feature__container__element__border">
                <img className="feature__container__element__img" src={imgResult} alt="agiliza relatórios"/>
              </div>
              <p className="feature__container__element__p">
                Agiliza a confecção de relatórios
              </p>
            </div>
            <div className="feature__container__element">
              <div className="feature__container__element__border">
                <img className="feature__container__element__img" src={imgAnalysis} alt="interpreta informações"/>
              </div>
              <p className="feature__container__element__p">
                Facilita o entendimento de informações
              </p>
            </div>
          </div>
        </section>
        <div className='footer__img'></div>
        <footer>
          <p>Copyright © 2018 | Kalkuli</p> 
        </footer>
      </Fragment>
    )
  }

  onConfirmOk = () => { this.props.history.push('/dashboard')}

  showRegister = () =>{
    return (
      <Fragment>
          <Register show={this.state.newCompany} OKfunc={this.onCloseRegister}/>
          <Backdrop show={this.state.newCompany} click={this.onCloseRegister} />
      </Fragment>
    )
  }
  
  onCloseRegister = () => { this.setState({newCompany: false}) }
  
  registerClick = ()=>{
    this.setState(prevState => ({newCompany: !prevState.newCompany}))
  }
}

export default HomePage