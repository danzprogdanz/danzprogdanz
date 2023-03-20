import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a className='iconR' href="https://www.linkedin.com/in/daniel-viana-a6bb59174/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a className='iconR' href="https://github.com/danzprogdanz" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials