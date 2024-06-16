import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <main>
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </AnimatePresence>
    </main>
  );
}

export default App;
