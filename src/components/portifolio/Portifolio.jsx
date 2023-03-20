import React from 'react';
import './portifolio.css';
import {FiGithub} from 'react-icons/fi'
import {FiExternalLink} from 'react-icons/fi';
import IMG1 from '../../assets/chat.png';
import IMG2 from '../../assets/music.png';
import IMG3 from '../../assets/todo.png';



const data = [
  {
    id:1,
    image: IMG1,
    description: 'html, css, javascript, socket.io, node.js, express.js',
    title: 'Chat',
    github: 'https://github.com/danzprogdanz/chat___app',
    demo:'https://colocaraquiapprodando.com.br/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Music Player',
    description: 'html, css, javascript',
    github: 'https://github.com/danzprogdanz/musicplayer',
    demo:'https://colocaraquiapprodando.com.br/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Todo List',
    description: 'React.js',
    github: 'https://github.com/danzprogdanz/todo-list',
    demo:'https://colocaraquiapprodando.com.br/'
  }
]


const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>códigos recentes</h5>
      <h2>Projetos</h2>

      <div className='container portifolio__container'>
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article id={id} className='portifolio__item'>
                <div className='portifolio__item-image'>
                  <img src={image} alt=""/>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='portifolio__item-cta'>
                  <a href={github} className='btn' target='_blank'  rel='noreferrer'><FiGithub/></a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'><FiExternalLink/></a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default Portifolio