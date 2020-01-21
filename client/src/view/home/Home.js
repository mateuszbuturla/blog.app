import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

import './Home.css'

const Home = () => {
    return (
        <React.Fragment>
            <Nav />
            <section className="home">
                <h2 className="home__header">Blog</h2>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Home;
