import React from 'react';
import SubscribeImg from '../style/img/subscribe-img.webp';
import { useForm } from 'react-hook-form';
import Button from './Button';

function Subscribe() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className='white-bg'>
            <div className='subscribe-container container'>
                <div className='subscribe-title'>
                    <h2>Subscribe to our newsletter</h2>
                    <p>
                        Sign up for our newsletter to receive
                        the latest updates, special offers, and more.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className='white-subscribe'>
                        <input
                            className='white-input'
                            type="email"
                            placeholder="Email" {...register("Email", { required: true, maxLength: 80 })}
                        />
                        <Button
                            className=' primary'
                            text='Join now'
                            type='submit'
                        />
                    </form>
                </div>
                <div className='subscribe-image-section'>
                    <figure>
                        <img src={SubscribeImg} alt='subscribe-img' className='subscribe-img' />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;