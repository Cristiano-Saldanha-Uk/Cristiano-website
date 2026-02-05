import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'animate.css';
import Navbar from './components/Navbar';
import HeroAboutWrapper from './components/HeroAboutWrapper';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import Certification from './components/Certification';
import Divider from './components//Divider';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <HeroAboutWrapper />
      <Divider />
      <TechStack />
      <Divider />
      <Projects />
      <Divider />
      <Certification />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </>
  );
}

export default App;
