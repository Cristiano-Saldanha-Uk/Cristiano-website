import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import 'bulma/css/bulma.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    });

    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Cursor />
            <Navbar />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Hero />
            </motion.div>
            <About />
            <div className="section-divider" />
            <TechStack />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Certification />
            <div className="section-divider" />
            <Contact />
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;