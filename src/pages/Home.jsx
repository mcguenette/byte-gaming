import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/hero/Hero';
import Dialog from '../components/dialog/Dialog';
import Button from '../components/Button';
import ProductCarousel from '../components/product-carousel/ProductCarousel';
import Subscribe from '../components/newsletter/Subscribe';
import AboutUs from '../components/about-us/AboutUs';

function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const prodCarouselRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenDialog(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const heroBtnClick = () => {
    if (prodCarouselRef.current) {
      prodCarouselRef.current.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <>
      <Hero onPrimaryClick={heroBtnClick} />
      <div className='container dialog-container'>
        {openDialog && <Dialog isOpen={openDialog} onClose={closeDialog} />}
      </div>
      <div ref={prodCarouselRef}>
      <ProductCarousel />
      </div>
      <Subscribe />
      <AboutUs />
    </>

  );
}

export default Home;
