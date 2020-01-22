import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

import './posts.css'

const Posts = () => {
    return (
        <React.Fragment>
            <Nav />
            <section className="posts">
                <h2 className="posts__header">Posts</h2>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default Posts;