import React,{Fragment} from 'react'
import './about.scss'
import './call.scss'
import './footer.scss'

const HomePage = () => {
  return (
      <div>
      <Fragment>
        <h1>Homepage</h1>
      </Fragment>
      <section>
        Header
      </section>
      <section className="about">
        <div className='about-img'></div>
        <div className='about-text'>
          <h1>Quem somos</h1>
          <p>O Kalkuli é uma aplicação que tem o intuito de facilitar o gerenciamento de notas fiscais. 
            Nossa meta é ajudar micro e pequenas empresas a fazer o controle de tributos fiscais de maneira rápida e prática.</p>
        </div>
      </section>
      <section className='call'>
        <p className='call-first'>Rápido entendimento fiscal</p>
        <div className='call-bar'></div>
        <p>Melhores relatórios geram melhores gestões</p>
        <div className='call-button'>Conheça a nossa empresa</div>
      </section>
      <section>
        Features 
      </section>
      <div className='footer-img'></div>
      <footer>

      </footer>

    </div>
  )
}

export default HomePage