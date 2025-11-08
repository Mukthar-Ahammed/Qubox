import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';
import About from './components/About';


function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      <Header />

      <nav className="fixed top-0 left-0 w-full bg-black p-4 z-50 flex gap-4">
        <ScrollLink to="hero" smooth={true} duration={800} className="cursor-pointer text-white">
          Home
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={800} className="cursor-pointer text-white">
          Services
        </ScrollLink>
        <ScrollLink to="About" smooth={true} duration={800} className="cursor-pointer text-white">
          About
        </ScrollLink>

        <ScrollLink to="contact" smooth={true} duration={800} className="cursor-pointer text-white">
            contact
        </ScrollLink>  

      </nav>

      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="About">
        <About/>
      </section>

      <section id="contact">
        <Footer />
      </section>
      
    </div>
  );
}

export default App;
