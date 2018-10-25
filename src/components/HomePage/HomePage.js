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
import Register from '../Register/Register'


class HomePage extends Component{

  state = {
    newCompany: true 
  }

  render(){
    return (
      <Fragment>
        <HomeNavBar click={this.registerClick}/>
        {this.state.newCompany ? this.showRegister() : null}
        <section className="header">
          <div className="header__container">
            <h1 className="header__container__h1">De Notas para Dados</h1>
            <div className="header__container__bar"></div>
            <p className="header__container__p">Automatize seu controle financeiro a partir de imagens de suas Notas Fiscais</p>
          </div>
        </section>
        <section id="about" className="about">
          <div className='about__img'></div>
          <div className='about__text'>
            <h1>Quem somos</h1>
            <p>O Kalkuli é uma aplicação que tem o intuito de facilitar o gerenciamento de notas fiscais. 
              Nossa meta é ajudar micro e pequenas empresas a fazer o controle de tributos fiscais de maneira rápida e prática.</p>
          </div>
        </section>
        <section className='call'>
          <p className='call__p--first'>Rápido entendimento fiscal</p>
          <div className='call__bar'></div>
          <p>Melhores relatórios geram melhores gestões</p>
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

  showRegister = () =>{
    return (
      <Fragment>
          <Backdrop show={this.state.newCompany} click={this.onCloseRegister} />
          <Register show={this.state.newCompany}/>
      </Fragment>
    )
  }
  
  onCloseRegister = () => { this.setState({newCompany: false}) }
  
  registerClick = ()=>{
    this.setState(prevState => ({newCompany: !prevState.newCompany}))
  }
}

export default HomePage