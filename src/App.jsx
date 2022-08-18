import React from 'react'
import './index.css'
import Header from './components/header/Header'
import About  from './components/about/About'
import Nav  from './components/nav/Nav'
import Expirience  from './components/expirience/Expirience'
import Services  from './components/services/Services'
import Portfolio  from './components/portfolio/Portfolio'
import Testimonials  from './components/testimonials/Testimonials'
import Contacts  from './components/contacts/Contacts'
import Footer  from './components/footer/Footer'

//import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expirience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />

    </>
  );
};

export default App;