import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Comment from './comment/Comment';

import './ReadMore.css';

const config = require('../../config');

class ReadMore extends React.Component {

    state = {
        post: [],
        comments: [],
        error: false
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (config.clientOnThisSamePortAsServer) {
            fetch(`/api/post/${id}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    if (r.length > 0)
                        this.setState({ post: r })
                    else
                        this.setState({ error: true })
                })
        }
        else {
            fetch(`http://localhost:3000/api/post/${id}`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    if (r.length > 0)
                        this.setState({ post: r })
                    else
                        this.setState({ error: true })
                })
        }

        fetch(`http://localhost:3000/api/comments/${id}`, { method: 'POST' })
            .then(r => r.json())
            .then(r => {
                this.setState({ comments: r })
            })
    }

    render() {
        const { post, error, comments } = this.state;
        const _comments = comments.map(comment => <Comment key={comment._id} comment={comment} />)
        return (
            <React.Fragment>
                <Nav />
                <section className="read-more">
                    {
                        post.length > 0 &&
                        <React.Fragment>
                            <h2 className="read-more__post-title">{post[0].title}</h2>
                            <p className="read-more__post-author">Author: {post[0].author}</p>
                            <p className="read-more__post-content">{post[0].content}</p>
                            <p className="read-more__comments">Comments:</p>
                            {_comments}
                            <form>
                                <p className="read-more__add-comment">Add comment:</p>
                                <input className="read-more__add-comment-input" type="text" placeholder="Author" /><br />
                                <textarea className="read-more__add-comment-input" placeholder="Comment"></textarea><br />
                                <input className="read-more__input-submit" type="submit" value="Add comment" />
                            </form>
                        </React.Fragment>
                    }
                    {
                        error === true &&
                        <React.Fragment>
                            <h2 className="read-more__error-code">404</h2>
                            <p className="read-more__error-description">This address cannot be found</p>
                        </React.Fragment>
                    }
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ReadMore;
