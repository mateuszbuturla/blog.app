import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

import './AddPost.css';

const AddPost = () => {
    return (
        <React.Fragment>
            <Nav />
            <section className="add-post">
                <h2 className="add-post__header">Add Post</h2>
                <form>
                    <input className="add-post__input" type="text" placeholder="Title" id="title" /><br />
                    <input className="add-post__input" type="text" placeholder="Author" id="author" /><br />
                    <textarea className="add-post__textarea" placeholder="Content" id="content"></textarea><br />
                    <input className="add-post__submit" type="submit" value="Add post" />
                </form>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default AddPost;
