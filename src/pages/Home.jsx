import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Dialog from '../components/Dialog';
import Button from '../components/Button';
import ProductCarousel from '../components/ProductCarousel';
import Subscribe from '../components/Subscribe';
import AboutUs from '../components/AboutUs';

function Home() {
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenDialog(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Hero />
      <div className='container dialog-container'>
        {openDialog && <Dialog isOpen={openDialog} onClose={closeDialog} />}
      </div>
      <ProductCarousel />
      <Subscribe />
      <AboutUs />
    </>

  );
}

export default Home;
