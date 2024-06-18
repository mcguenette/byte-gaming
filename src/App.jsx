import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/header/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';

const pageTransition = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
  transition: { duration: 0.3 },
};

const homeTransition = {
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 5 },
  transition: { duration: 0.3 },
};

function App() {
  const location = useLocation();

  return (
    <main>
      {location.pathname !== '/' && <Header />}
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path='/'
            element={
              <motion.div
                initial='initial'
                animate='animate'
                exit='exit'
                variants={homeTransition}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path='/product/:id'
            element={
              <motion.div
                initial='initial'
                animate='animate'
                exit='exit'
                variants={pageTransition}
              >
                <Product />
              </motion.div>
            }
          />
          <Route
            path='/contact'
            element={
              <motion.div
                initial='initial'
                animate='animate'
                exit='exit'
                variants={pageTransition}
              >
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </main>
  );
}

export default App;
