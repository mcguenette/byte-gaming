import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { IoClose } from "react-icons/io5";
import { useForm } from 'react-hook-form';

function Dialog({ isOpen, onClose }) {
    const dialogRef = useRef(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!isOpen) {
            dialog.close();
        }
    }, [isOpen]);

    const close = () => {
        onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            className={`dialog ${isOpen ? 'open' : ''}`}
            onClose={close}
        >
            <div className='close-icon'>
            <IoClose onClick={close} className='close-dialog'/>
            </div>
            <div className='newsletter-title'>
                <h2><b>Level Up </b>with Byte</h2>
            </div>
            <div className='newsletter-content'>
                <p>Subscribe now for updates, special</p>
                 <p>discounts, and insider tips!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            type="email" 
            placeholder="Email" {...register("Email", {required: true, maxLength: 80})}
            />
            <Button
                className=' primary'
                text='Join'
                type='submit'
            />
            </form>

            </div>
        </dialog>
    );
}

export default Dialog;
