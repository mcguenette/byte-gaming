import React from "react";
import Button from "../Button";

function ContactForm() {
    return (
        <div className="contact-form">
            <h2 className="">Contact Us</h2>
            <form className="contact-form-form">
                <label className="contact-form-label">
                    <p>Name:</p>
                    <input type="text" />
                </label>
                <label className="contact-form-label">
                    <p>Email:</p>
                    <input type="email" />
                </label>
                <label className="contact-form-label">
                    <p>Message:</p>
                    <textarea />
                </label>
                <Button text="Submit" className={"primary submit-button"}/>
            </form>
        </div>
    );
}

export default ContactForm;