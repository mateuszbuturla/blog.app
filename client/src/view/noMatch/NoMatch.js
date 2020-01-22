import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

import './NoMatch.css';

const Contact = () => {
    return (
        <React.Fragment>
            <Nav />
            <section className="no-match">
                <h2 className="no-match__error-code">404</h2>
                <p className="no-match__error-description">This address cannot be found</p>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Contact;
