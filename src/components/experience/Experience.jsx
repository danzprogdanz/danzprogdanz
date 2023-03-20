import React from "react";
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import {SiHtml5} from 'react-icons/si';
import {SiCss3} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {SiReact} from 'react-icons/si';
import {SiFigma} from 'react-icons/si';
import {SiNodedotjs} from 'react-icons/si';
import {SiExpress} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {SiSocketdotio} from 'react-icons/si';
import {SiGit} from 'react-icons/si';
import {SiGithub} from 'react-icons/si';
import {SiHeroku} from 'react-icons/si';
import {TbBrandVscode} from 'react-icons/tb';
import {SiPostman} from 'react-icons/si';


const Experience = () => {

    return (
        <section id='experience'>
            <h5>tecnologias e ferramentas</h5>
            <h2>Habilidades</h2>
            <div className="container experience__container">
                {/*FRONT*/}
                <div className="experience__frontend">
                    <div className="skills-title">
                        <h3>Frontend</h3>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiHtml5 className="skills-icons"/>
                            <h4>HTML5</h4>
                        </article>
                        <article className="experience__details">
                            <SiCss3 className="skills-icons"/>
                            <h4>CSS3</h4>
                        </article>
                        <article className="experience__details">
                            <SiJavascript className="skills-icons"/>
                            <h4>Javascript</h4>
                        </article>
                        <article className="experience__details">
                            <SiReact className="skills-icons"/>
                            <h4>React.js</h4>
                        </article>
                        <article className="experience__details">
                            <SiFigma className="skills-icons"/>
                            <h4>Figma</h4>
                        </article>
                    </div>
                </div>
                {/*BACK*/}
                <div className="experience__backend">
                    <div className="skills-title">
                        <h3>Backend</h3>
                    </div>
                        <div className="experience__content">
                            <article className="experience__details">
                                <SiNodedotjs className="skills-icons"/>
                                <h4>Node.js</h4>
                            </article>
                            <article className="experience__details">
                                <SiExpress className="skills-icons"/>
                                <h4>Express.js</h4>
                            </article>
                            <article className="experience__details">
                                <SiMongodb className="skills-icons"/>
                                <h4>MongoDB</h4>
                            </article>
                            <article className="experience__details">
                                <SiSocketdotio className="skills-icons"/>
                                <h4>Socket.io</h4>
                            </article>
                        </div>
                </div>
                {/*OUTROS*/}
                <div className="experience__others">
                    <div className="skills-title">
                        <h3>Outros</h3>
                    </div>
                        <div className="experience__content">
                            <article className="experience__details">
                                <SiGit className="skills-icons"/>
                                <h4>Git</h4>
                            </article>
                            <article className="experience__details">
                                <SiGithub className="skills-icons"/>
                                <h4>Github</h4>
                            </article>
                            <article className="experience__details">
                                <SiHeroku className="skills-icons"/>
                                <h4>Heroku</h4>
                            </article>
                            <article className="experience__details">
                                <TbBrandVscode className="skills-icons"/>
                                <h4>VS Code</h4>
                            </article>
                            <article className="experience__details">
                                <SiPostman className="skills-icons"/>
                                <h4>Postman</h4>
                            </article>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;