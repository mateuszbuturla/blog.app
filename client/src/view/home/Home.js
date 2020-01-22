import React from 'react';

import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import Post from '../post/Post';

import './Home.css'

class Home extends React.Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/newposts`, { method: 'GET' })
            .then(r => r.json())
            .then(r => {
                console.log(r)
                this.setState({ posts: r })
            })
    }

    render() {
        const { posts } = this.state;
        const _posts = posts.map(post => <Post key={post._id} post={post} />)
        return (
            <React.Fragment>
                <Nav />
                <section className="home">
                    <h2 className="home__header">Blog</h2>
                    {this.state.posts.length > 0 && _posts}
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;
