import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/Stars.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá (; Eu sou</h5>
        <h1>Daniel Viana</h1>
        <h5 className='text-ligth'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" ></img>
        </div>

      </div>
    </header>
  )
}

export default Header