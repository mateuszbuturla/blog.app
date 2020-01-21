import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

import './Contact.css';

const Contact = () => {
    return (
        <React.Fragment>
            <Nav />
            <section className="contact">
                <h2 className="contact__header">Contact</h2>
                <p className="contact__email">E-mail: blog.app@blogapp.com</p>
                <p className="contact__phone">Mobile Number: 123-456-789</p>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Contact;
