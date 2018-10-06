import React from 'react'
import './CadastreEmpresa.scss'

const cadastreEmpresa = (props) => {
  let styles = ["cadastra-btn"]
  if(props.size === "large")
    styles.push("large")
  else(props.size === "small")
    styles.push("small")
  return (
    <div className={styles.join(' ')}>Cadastre sua empresa</div>
  )
}

export default cadastreEmpresa