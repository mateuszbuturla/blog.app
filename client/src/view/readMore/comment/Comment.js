import React from 'react';

import './Comment.css';

const Comment = (props) => {
    const { author, content } = props.comment;
    return (
        <div className="comment">
            <p className="comment__author">Author: {author}</p>
            <p className="comment__content">{content}</p>
        </div>
    );
}

export default Comment;