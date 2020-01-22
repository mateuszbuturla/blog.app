import React from 'react';
import { Link } from 'react-router-dom';

import './Post.css'

const Posts = (props) => {
    const { _id, title, author, content } = props.post;
    return (
        <div className="post">
            <h2 className="post__title">{title}</h2>
            <p className="post__author">Author: {author}</p>
            <p className="post__content">{content}</p>
            <Link className="post__read-more" to={`/post/${_id}`}>Read more</Link>
        </div>
    );
}

export default Posts;