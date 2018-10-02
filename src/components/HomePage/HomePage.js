import React,{Fragment} from 'react'
import './about.scss'
import './call.scss'

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
        <img alt='Uma Imagem legal aqui'></img>
        <div className='about-text'>
          <h1>Quem somos</h1>
          <p>O Kalkuli é uma aplicação que tem o intuito de facilitar o gerenciamento de notas fiscais. 
            Nossa meta é ajudar micro e pequenas empresas a fazer o controle de tributos fiscais de maneira rápida e prática.</p>
        </div>
      </section>
      <section className='call'>
        <p>Rápido entendimento Fiscal</p>
        <div></div>
        <p>Melhores relatórios geram melhores gestões</p>
        <div></div>
      </section>
      <section>
        Features 
      </section>
      <footer>

      </footer>

    </div>
  )
}

export default HomePage