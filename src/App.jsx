import React, {Fragment} from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from '../src/components/about/About';
import Experience from '../src/components/experience/Experience'
import Portifolio from './components/portifolio/Portifolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Fragment>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portifolio/>
        <Contact/>
        <Footer/>
    </Fragment>
  )
}

export default App