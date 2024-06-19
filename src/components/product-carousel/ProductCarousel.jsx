import { useEffect, useState } from 'react';
import Button from '../Button';
import FirstImage from '../../style/img/hyperx_headphones.webp';
import SecondImage from '../../style/img/mouse_img.webp';
import ThirdImage from '../../style/img//hyperx_.webp';
import FourthImage from '../../style/img/K596-M686.webp';

import './carousel.css';

function ProductCarousel() {
    const [products, setProducts] = useState([]);
    async function getProducts() {
        const response = await fetch('https://dummyjson.com/products')  // fetch the products
        const data = await response.json() // convert the response to json
        setProducts(data.products) // set the products in the state to the products we fetched
    }
    useEffect(() => {
        getProducts()
    }, [])
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
                        <Button className='secondary' text='View more' />
                    </div>
                </div>
                <div className='product-carousel' >
                    {
                        products.slice(0, 4).map(product => (
                            <div key={product.id} className='product-card'>
                                <div className='product-card-inner'>
                                    <div className='product-card-title'>
                                        {/* <h3>{product.title}</h3> */}
                                        <h3>{product.title}</h3>
                                    </div>
                                    <div className='product-card-image'>
                                        <figure>
                                            <img src={product.thumbnail} alt={product.title} className='product-img' />
                                        </figure>
                                    </div>
                                    <div className='product-card-content'>
                                        <div className='product-price'>
                                            <p>${product.price}</p>
                                        </div>
                                        <div className='product-atc'>
                                            <Button className='primary' text='Add to Cart' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default ProductCarousel;