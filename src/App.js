import React, { useState } from 'react';
import Navbar from './Navbar';
import Projects from './projects2';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import Hero from './Hero';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />


    </>

  );
}

export default App;
