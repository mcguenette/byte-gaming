import React from 'react';
import Button from '../Button';
import FirstImage from '../../style/img/hyperx_headphones.webp';
import SecondImage from '../../style/img/mouse_img.webp';
import ThirdImage from '../../style/img//hyperx_.webp';
import FourthImage from '../../style/img/K596-M686.webp';

import './carousel.css';

function ProductCarouselOG() {
    return (
        <section className='product-carousel-section'>
            <div className='container'>
                <div className='product-carousel-title'>
                    <div className='section-title-left'>
                        <h2>Best <b>Pro Gaming</b> Products</h2>
                    </div>
                    <div className='section-title-middle'>
                        <p>
                            Explore our curated collection of elite accessories. 
                            Elevate your gameplay with precision and
                            performance.
                        </p>
                    </div>
                    <div className='section-title-right'>
                        <Button className='secondary' text='View more'/>
                    </div>
                </div>
                <div className='product-carousel' >
                           {/* Adding dummy info for carousel styling - MC */}
                    <div className='product-card'>
                        <div className='product-card-inner'>
                        <div className='product-card-title'>
                            {/* <h3>{product.title}</h3> */}
                     <h3>X Headphones</h3>
                        </div>
                        <div className='product-card-image'>
                            <figure>      
                                <img src={FirstImage} alt="product" className='product-img'/>
                            </figure>
                        </div>
                        <div className='product-card-content'>
                            <div className='product-price'>
                                <p>$ 159.99</p>
                            </div>
                            <div className='product-atc'>
                                <Button className='primary' text='Add to Cart' />
                            </div>
                        </div>
                        
                        </div>

                    </div>
                    <div className='product-card'>
                        <div className='product-card-inner'>
                        <div className='product-card-title'>
                            {/* <h3>{product.title}</h3> */}
                     <h3>Y Mouse</h3>
                        </div>
                        <div className='product-card-image'>
                        <figure>      
                                <img src={SecondImage} alt="product" className='product-img'/>
                            </figure>
                        </div>
                        <div className='product-card-content'>
                            <div className='product-price'>
                                {/* {product.price} */}
                                <p>$ 89.99</p>
                            </div>
                            <div className='product-atc'>
                                <Button className='primary' text='Add to Cart' />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-card-inner'>
                        <div className='product-card-title'>
                            {/* <h3>{product.title}</h3> */}
                     <h3>Z Keyboard</h3>
                        </div>
                        <div className='product-card-image'>
                        <figure>      
                                <img src={ThirdImage} alt="product" className='product-img'/>
                            </figure>
                        </div>
                        <div className='product-card-content'>
                            <div className='product-price'>
                                {/* {product.price} */}
                                <p>$ 129.99</p>
                            </div>
                            <div className='product-atc'>
                                <Button className='primary' text='Add to Cart' />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='product-card-inner'>
                        <div className='product-card-title'>
                            {/* <h3>{product.title}</h3> */}
                     <h3>YZ Bundle</h3>
                        </div>
                        <div className='product-card-image'>
                        <figure>      
                                <img src={FourthImage} alt="product" className='product-img'/>
                            </figure>
                        </div>
                        <div className='product-card-content'>
                            <div className='product-price'>
                                {/* {product.price} */}
                                <p className='regular'>$199.99</p><p className='sale'>$ 179.99</p>
                            </div>
                            <div className='product-atc'>
                                <Button className='primary' text='Add to Cart' />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProductCarouselOG;