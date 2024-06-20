
import Button from "../Button";

// eslint-disable-next-line react/prop-types
function ContactForm({ contactFormRef }) {
    return (
        <div className="contact-form" ref={contactFormRef}>
            <h2>Please fill free to text us</h2>
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

