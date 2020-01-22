import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Post from '../post/Post';

import './posts.css'

const config = require('../../config');

class Posts extends React.Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        if (config.clientOnThisSamePortAsServer) {
            fetch(`/api/posts`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    console.log(r)
                    this.setState({ posts: r })
                })
        }
        else {
            fetch(`http://localhost:3000/api/posts`, { method: 'POST' })
                .then(r => r.json())
                .then(r => {
                    console.log(r)
                    this.setState({ posts: r })
                })
        }
    }

    render() {
        const { posts } = this.state;
        const _posts = posts.map(post => <Post key={post._id} post={post} />)
        return (
            <React.Fragment>
                <Nav />
                <section className="posts">
                    <h2 className="posts__header">Posts</h2>
                    {this.state.posts.length > 0 && _posts}
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Posts;