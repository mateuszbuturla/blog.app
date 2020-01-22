import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

import './ReadMore.css';

class ReadMore extends React.Component {

    state = {
        post: [],
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`http://localhost:3000/api/post/${id}`, { method: 'GET' })
            .then(r => r.json())
            .then(r => {
                this.setState({ post: r })
            })
    }

    render() {
        const { post } = this.state;
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
                        </React.Fragment>
                    }
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ReadMore;
