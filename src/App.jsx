import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/header/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/footer/Footer';
import RouteError from './route-error/RouteError';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

const homeTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: 'easeInOut' },
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
            path='/product/:productSlug'
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
          <Route
            path='/cart'
            element={
              <motion.div
                initial='initial'
                animate='animate'
                exit='exit'
                variants={pageTransition}
              >
                <Cart />
              </motion.div>
            }
          />
          <Route
            path='*'
            element={
              <motion.div
                initial='initial'
                animate='animate'
                exit='exit'
                variants={pageTransition}
              >
                <RouteError />
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