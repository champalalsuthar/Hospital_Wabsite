import React from 'react';
import "../../Styles/Contact/ContactForm.css";

const ContactForm = () => {
    return (
        <div class="cf ">
            <div class="cf-main-div ">
                <div class="cf-left ">
                    <h1 className="cf-left-h ">Welcome to Rk Clinic!</h1>
                    <p className="cf-left-p ">We accept most insurances and Medical Card. We also provide financing options for those paying out of pocket.</p>
                    <p className="cf-left-p ">Call to schedule an appointment today.<a className='cf-left-p-help' href="tel:+91 9081726354">+91 9081726354 </a></p>
                    <p className="cf-left-p"><a className='cf-left-p-help' href="mailto:support@rkclinic.com">Email:support@rkclinic.com</a></p>
                    <p className="cf-left-p ">Come as a patient. Leave as a friend.</p>
                </div>
                <div class="cf-right ">
                    <form action="https://formspree.io/f/mzbnzwkn" method="post" className="cf-form ">
                        <div className="cf-form-div">
                            <label for="name" className="cf-form-div-label ">Name:</label>
                            <input type="text" id="name" name="name" className="cf-form-div-input " />
                        </div>
                        <div className="cf-form-div ">
                            <label for="email" className="cf-form-div-label ">Email:</label>
                            <input type="email" id="email" name="email" className="cf-form-div-input " />
                        </div>
                        <div className="cf-form-div ">
                            <label for="message" className="cf-form-div-label ">Message:</label>
                            <textarea id="message" name="message" rows="4" className="cf-form-div-input"></textarea>
                        </div>
                        <div className="cf-sumit-div">
                            <button type="submit" className="cf-sumit-div-button ">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ContactForm;