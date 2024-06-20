import { useState } from "react";
import Button from "../Button";

// eslint-disable-next-line react/prop-types
function ContactForm({ contactFormRef }) {
    const [ContactName, setName] = useState('');
    const [ContactEmail, setEmail] = useState('');
    const [ContactMessage, setMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [formClass, setFormClass] = useState('big-margin-bottom');

    const sendEmail = async (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page

        setFormClass('small-margin-bottom'); // Update the form class

        try {
            const response = await fetch('https://bytegamingapi.azurewebsites.net/contact-request/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    ContactName,
                    ContactEmail,
                    ContactMessage
                }), 
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response data:', data);
            console.log('all good');
            setEmailMessage("The email was sent");
        } catch (error) {
            console.error("Error:", error);
            setEmailMessage("Error sending email");
        }
    };

    return (
        <div className="contact-form" ref={contactFormRef}>
            <h2>Please feel free to text us</h2>
            <form className={`contact-form-form ${formClass}`} onSubmit={sendEmail}>
                <label className="contact-form-label">
                    <p>Name:</p>
                    <input type="text" value={ContactName} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="contact-form-label">
                    <p>Email:</p>
                    <input type="email" value={ContactEmail} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className="contact-form-label">
                    <p>Message:</p>
                    <textarea value={ContactMessage} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <Button text="Submit" className={"primary submit-button"} />
                <p className="email-acception">{emailMessage}</p>
            </form>
        </div>
    );
}

export default ContactForm;

