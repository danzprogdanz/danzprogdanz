import React from 'react'
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {HiCode} from 'react-icons/hi';

const Footer = () => {
  return (
    <footer>
      <a className='footer__logo'><HiCode/></a>

      <ul className='permalinks'>
        <li><a href="#">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Habilidades</a></li>
        <li><a href="#portifolio">Projetos</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a className='iconR' href="https://www.linkedin.com/in/daniel-viana-a6bb59174/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a className='iconR' href="https://github.com/danzprogdanz" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; danz.codes</small>
      </div>
    </footer>
  )
}

export default Footer