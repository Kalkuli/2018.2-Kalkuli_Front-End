import React from 'react'
import './SignUp.scss'

const SignUp = (props) => {
  let styles = ["SignUp-btn"]
  if(props.size === "large")
    styles.push("large")
  else(props.size === "small")
    styles.push("small")
  return (
    <div className={styles.join(' ')}>Cadastre sua empresa</div>
  )
}

export default SignUp