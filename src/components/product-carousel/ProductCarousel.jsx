import React, { useEffect, useState, useContext } from 'react';
import Button from '../Button';
import { CartContext } from '../cart/CartProvider';
import { useNavigate } from 'react-router-dom';
import './carousel.css';

function ProductCarousel() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    async function getProducts() {
        try {
            const response = await fetch('https://bytegamingapi.azurewebsites.net/products');
            const productData = await response.json();
            setProducts(productData);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const addProductToCart = (product) => {
        addToCart(product, () => {
            navigate('/cart');
        });
    };

    return (
        <section className='product-carousel-section'>
            <div className='container'>
                <div className='product-carousel-title'>
                    <div className='section-title-left'>
                        <h2>Best <b>Pro Gaming</b> Products</h2>
                    </div>
                    <div className='section-title-middle'>
                        <p>
                        Discover our thoughtfully curated collection of premium accessories. Elevate your gameplay 
                        with unparalleled precision and performance, and gain the competitive edge you deserve.
                        </p>
                    </div>
                    <div className='section-title-right'>
                        <Button className='secondary' text='View more' />
                    </div>
                </div>
                <div className='product-carousel'>
                    {
                        products.map(product => (
                            <div key={product.productId} className='product-card'>
                                <div className='product-card-inner'>
                                    <div className='product-card-title'>
                                        <h3>{product.productName}</h3>
                                    </div>
                                    <div className='product-card-image'>
                                        <figure>
                                            <img src={product.productImageURL} alt={product.productName} className={`product-img ${product.productName === 'Y Mouse' ? 'y-mouse' : ''}`} />
                                        </figure>
                                    </div>
                                    <div className='product-card-content'>
                                        <div className='product-price'>
                                            <p>${product.productPrice}</p>
                                        </div>
                                        <div className='product-atc'>
                                            <Button
                                                className='primary'
                                                text='Add to cart'
                                                onClick={() => addProductToCart(product)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default ProductCarousel;