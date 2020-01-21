import React from 'react';

import Nav from './nav/Nav';
import Posts from './posts/Posts';
import Footer from './footer/Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Nav />
            <Posts />
            <Footer />
        </React.Fragment>
    );
}

export default Home;
