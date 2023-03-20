import React from 'react';
import './about.css';
import {FaChess} from 'react-icons/fa';
import {MdDirectionsBike} from 'react-icons/md';
import {FaMusic} from 'react-icons/fa';
import {GiForkKnifeSpoon} from 'react-icons/gi';
import {FaBookReader} from 'react-icons/fa';
import {BsFillKeyboardFill} from 'react-icons/bs';




const About = () => {


    return (
        <section id='about'>
            <h5>hobbies + trajetória</h5>
            <h2>Sobre</h2>
            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaChess className='about__icon'/>
                        <h5>Xadrez</h5>
                    </article>
                    <article className='about__card'>
                        <MdDirectionsBike className='about__icon'/>
                        <h5>Bike</h5>
                    </article>
                    <article className='about__card'>
                        <FaMusic className='about__icon'/>
                        <h5>Música</h5>
                    </article>
                    <article className='about__card'>
                        <FaBookReader className='about__icon'/>
                        <h5>Ler</h5>
                    </article>
                    <article className='about__card'>
                        <GiForkKnifeSpoon className='about__icon'/>
                        <h5>Cozinhar</h5>
                    </article>
                    <article className='about__card'>
                        <BsFillKeyboardFill className='about__icon'/>
                        <h5>Programar</h5>
                    </article>
                </div>
            </div>
                <div className='about-text'>
                    <p>
                    Quando concluí o Ensino Médio não tinha
    certeza sobre qual carreira seguir, então optei
    por não iniciar nenhum curso superior na época.
    Como sempre tive uma afinidade com as matérias de
    exatas, me candidatei e fui aprovado para
    trabalhar em uma empresa que gerencia aulas de
    reforço. Então, passei alguns anos ministrando
    aulas de reforço domiciliar das matérias física,
    química e matemática. 

    Com a pandemia, fiquei impossibilitado de dar
    aulas, e surgiu a necessidade e o desejo de
    investir energia em outra área. Como estava com
    tempo livre, comecei a ler mais sobre lógica,
    raciocínio crítico, e acabei me deparando com o
    universo da programação, o que me despertou uma
    forte atração e curiosidade. Em pouco tempo se
    tornou um hobby e um projeto de carreira.

    Inicialmente, comecei meus estudos de forma
    livre e autodidata, explorando os caminhos que a
    área de tecnologia da informação possibilita. Em
    seguida, no ano de 2022, iniciei a graduação em
    Análise e Desenvolvimento de Sistemas na UNIFOR,
    curso que está alinhado com meus objetivos
    profissionais. (:</p>
            </div>
        </section>
    );
};

export default About;