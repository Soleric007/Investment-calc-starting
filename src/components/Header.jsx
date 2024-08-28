import React from 'react'
import Logo from '../assets/investment-calculator-logo.png'
const Header = () => {
  return (
    <div id='header'>
      <img src={Logo} alt="" />
      <h1>
        Investment Calculator
      </h1>
    </div>
  )
}

export default Header
