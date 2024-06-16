import React from 'react';
import Button from './Button';


function ProductCarousel() {
    return (
        <section className='product-carousel-section'>
            <div className='container'>
                <div className='product-carousel-title'>
                    <div className='section-title-left'>
                        <h2>Best <b>Pro Gaming</b> Products</h2>
                    </div>
                    <div className='section-title-middle'>
                        <p>
                            Explore our curated collection of elite accessories for
                            serious gamers. Elevate your gameplay with precision and
                            performance. Discover the gear that champions rely on!
                        </p>
                    </div>
                    <div className='section-title-right'>
                        {/* button */}
                    </div>
                </div>
                <div className='product-carousel' >
                    <div className='product-card'>
                        <div className='product-card-title'>
                            {/* <h3>{product.title}</h3> */}
                        </div>
                        <div className='product-card-image'>
                            <figure>
                                {/* <img src={product.image} alt="product"/> */}
                            </figure>
                        </div>
                        <div className='product-card-content'>
                            <div className='product-price'>
                                {/* {product.price} */}
                            </div>
                            <div className='product-atc'>
                                <Button className='primary' text='Add to Cart' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProductCarousel;