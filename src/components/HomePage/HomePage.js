import React,{Fragment} from 'react'
import Scrollchor from 'react-scrollchor';
import './header.scss'
import './about.scss'
import './call.scss'
import './features.scss'
import './footer.scss'
import './navbar.scss'
import imgPiggy from '../../assets/img/piggy-bank.svg'
import imgReceipt from '../../assets/img/receipt.svg'
import imgAnalysis from '../../assets/img/analysis.svg'
import imgResult from '../../assets/img/result.svg'

const HomePage = () => {
  return (
    <Fragment>
      <nav className="nav">
        <a><h1 className="nav__logo">Kalkuli</h1></a>
        <div className="nav__end">
          <Scrollchor to="#about" className="nav__link">Sobre</Scrollchor>
          <Scrollchor to="#features" className="nav__link">Funcionalidades</Scrollchor>
          <div className="nav__bar"></div>
          <a to="#about" className="nav__link" href="#">Log in</a>
          <a to="#about" className="nav__link nav__button" href="#">Cadastre sua empresa</a>
        </div>
      </nav>
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
        <div className='call__button'>Cadastre sua empresa</div>
      </section>
      <section id="features" className="feature">
        <h1 className="feature__h1">Como o Kalkuli pode te ajudar?</h1>
        <div className="feature__container">
          <div className="feature__container__element">
            <div className="feature__container__element__border">
              <img className="feature__container__element__img" src={imgPiggy}/>
            </div>
            <p className="feature__container__element__p">
              Melhora o controle financeiro
            </p>
          </div>
          <div className="feature__container__element">
            <div className="feature__container__element__border">
              <img className="feature__container__element__img" src={imgReceipt}/>
            </div>
            <p className="feature__container__element__p">
              Evita a perda de comprovantes
            </p>
          </div>
          <div className="feature__container__element">
            <div className="feature__container__element__border">
              <img className="feature__container__element__img" src={imgResult}/>
            </div>
            <p className="feature__container__element__p">
              Agiliza a confecção de relatórios
            </p>
          </div>
          <div className="feature__container__element">
            <div className="feature__container__element__border">
              <img className="feature__container__element__img" src={imgAnalysis}/>
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

export default HomePage