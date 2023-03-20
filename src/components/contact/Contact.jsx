import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {MdOutlineWhatsapp} from 'react-icons/md';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7s4ev25', 'template_rag0gvt', form.current, 'PevbSpQbmIW4W_6dj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return (
        <section id='contact'>
            <h5>Vamos conversar (:</h5>
            <h2>Contato</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>danieldvm7@gmail.com</h5>
                        <a href="mailto:danieldvm7@gmail.com" target='_blank' rel='noreferrer' >Manda um email (;</a>
                    </article>
                    <article className="contact__option">
                        <MdOutlineWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>(83) 998342283</h5>
                        <a href="https://wa.me/5583998342283" target='_blank' rel='noreferrer'>Manda uma menssagem (;</a>
                    </article>
                </div>
                {/*final das opções de contato*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Seu nome' required/>
                    <input type='email' name='email' placeholder='Seu email' required/>
                    <textarea name='message' rows='7' placeholder='Menssagem' required></textarea>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;