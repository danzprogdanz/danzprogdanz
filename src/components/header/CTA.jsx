import React from 'react';
import '../../index.css';
import CV from '../../assets/cv.pdf';
import {MdEmail} from 'react-icons/md';


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} downalod className='btn' target='_blank' rel='noreferrer'>Download CV</a>
        <a href="#contact" className='btn btn-primary' ><MdEmail className='mail-header-icon'/></a>
    </div>
  )
}

export default CTA